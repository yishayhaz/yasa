import { useCallback, useEffect, useMemo, useState } from "react";
import { AnyObject } from "../types";
import { getSearchParams } from "../utils/params";
import { useDebounce } from "./debounce";

export type Filters<T> = { [key in keyof T]: Filter };

export type Filter = "string" | "number" | "boolean" | "date";

export type UseFiltersOnChange<K> = (
  key: K,
  value: string,
  fire?: boolean
) => {
  debounce: () => void;
  fire: () => void;
};

export type UseFiltersSearchParam<T> = {
  [key in keyof T]: UseFiltersSearchParamValue;
};

export type UseFiltersSearchParamValue = string | number | boolean | Date;

export type UseFiltersFireSearch<T> = (asValues: {
  [key in keyof T]: string;
}) => void;

export type UseFiltersOptions = {
  t?: number;
};

export type UseFiltersReturn<T, K extends keyof T> = {
  searchParams: Partial<UseFiltersSearchParam<T>>;
  asValues: { [key in keyof T]: string };
  onChange: UseFiltersOnChange<K>;
  onClick: () => void;
  search: UseFiltersFireSearch<T>;
  clear: () => void;
};

export const useFilters = <T, K extends keyof T>(
  filters: Filters<T>,
  fireSearch: UseFiltersFireSearch<T>,
  options?: UseFiltersOptions
): UseFiltersReturn<T, K> => {
  const debounceSearch = useDebounce(fireSearch, options?.t || 500);

  const [searchParams, setSearchParams] = useState<
    Partial<UseFiltersSearchParam<T>>
  >({});

  const _extractInitialFilters = () => {
    const searchParams = getSearchParams(...Object.keys(filters));
    const params: AnyObject = {};

    for (const [key, value] of Object.entries(searchParams)) {
      const param = _convertValueByType(
        filters[key as keyof T],
        value as string
      );

      if (param === null) continue;

      params[key] = param;
    }

    setSearchParams(params as UseFiltersSearchParam<T>);
    fireSearch(_toAsValues(params as UseFiltersSearchParam<T>));
  };

  const _convertValueByType = (type: string, value: string) => {
    if (value === "") return null;

    if (type === "string") {
      return value;
    }

    if (type === "number") {
      if (isNaN(Number(value))) return null;
      return Number(value);
    }

    if (type === "boolean") {
      if (!["true", "false", true, false].includes(value)) return null;
      return value === "true";
    }

    if (type === "date") {
      let _value: UseFiltersSearchParamValue = value;
      if (Number.isInteger(Number(_value))) _value = Number(_value);

      if (new Date(_value).toString() === "Invalid Date") return null;
      return new Date(_value).getTime();
    }
  };

  const _goToParams = useCallback(
    (params = searchParams) => {
      const newParams: AnyObject = {};
      for (const [key, value] of Object.entries(params)) {
        newParams[key] = (value as UseFiltersSearchParamValue).toString();
      }
      const searchParams = new URLSearchParams(newParams).toString();

      let url = window.location.pathname;

      if (searchParams !== "") {
        url += `?${searchParams}`;
      }

      window.history.pushState({}, "", url);
    },
    [searchParams]
  );

  const _toAsValues = (params = searchParams) => {
    const values: AnyObject = {};
    for (const [key, value] of Object.entries(params)) {
      value as UseFiltersSearchParamValue;
      if (filters[key as keyof T] === "date" && typeof value !== "boolean") {
        values[key] = new Date(value as any).toISOString().split("T")[0];
      } else {
        values[key] = (value as UseFiltersSearchParamValue).toString();
      }
    }
    return values as { [key in keyof T]: string };
  };

  useEffect(() => {
    _extractInitialFilters();
  }, []);

  useEffect(() => {
    _goToParams();
  }, [searchParams]);

  const onChange: UseFiltersOnChange<K> = (key, value) => {
    // eslint-disable-next-line
    if (!filters[key as keyof T])
      return {
        debounce: () => debounceSearch(asValues),
        fire: () => fireSearch(asValues),
      };

    const param = _convertValueByType(filters[key as keyof T], value);
    const newSearchParams = { ...searchParams };

    if (param === null || typeof param === "undefined") {
      delete newSearchParams[key];
    } else {
      newSearchParams[key] = param;
    }

    setSearchParams(newSearchParams as UseFiltersSearchParam<T>);

    const asValues = _toAsValues(newSearchParams as UseFiltersSearchParam<T>);

    return {
      debounce: () => debounceSearch(asValues),
      fire: () => fireSearch(asValues),
    };
  };

  const onClick = () => {
    fireSearch(asValues);
  };

  const clear = () => {
    setSearchParams({});
  };

  const asValues = useMemo(_toAsValues, [searchParams]);

  return {
    searchParams,
    asValues,
    search: debounceSearch,
    onChange,
    onClick,
    clear,
  };
};
