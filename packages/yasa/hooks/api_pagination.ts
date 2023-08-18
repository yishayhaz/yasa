import { useState } from "react";
import { UseApiOptions, UseApiResult, useApi } from "./api";

export type UseApiPaginationResult<T, K extends any[]> = Omit<
  UseApiResult<T, K>,
  "fire"
> &
  UseApiPaginationArgs & {
    setPage: (page: number) => (...args: K) => void;
    setAmount: (count: number) => (...args: K) => void;
    fire: (...args: K) => void;
    calcPages: (total: number) => number;
  };

export type UseApiPaginationOptions<T, K extends any[]> = {
  page?: number;
  amount?: number;
} & UseApiOptions<T, [UseApiPaginationArgs, ...K]>;

export type UseApiPaginationArgs = {
  page: number;
  amount: number;
};

export type UseApiPaginationFunction<T, K extends any[]> = (
  aginationArgs: UseApiPaginationArgs,
  ...args: K
) => Promise<T>;

export const useApiPagination = <T, K extends any[]>(
  func: UseApiPaginationFunction<T, K>,
  options?: UseApiPaginationOptions<T, K>
): UseApiPaginationResult<T, K> => {
  const [page, _setPage] = useState<number>(options?.page ?? 1);
  const [amount, _setAmount] = useState<number>(options?.amount ?? 20);

  const api = useApi(func, {
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  const setPage = (page: number) => {
    _setPage(page);

    return (...args: K) => {
      api.fire(
        {
          page,
          amount,
        },
        ...args
      );
    };
  };

  const setAmount = (amount: number) => {
    _setAmount(amount);

    return (...args: K) => {
      api.fire(
        {
          page,
          amount,
        },
        ...args
      );
    };
  };

  const fire = (...args: K) => {
    api.fire(
      {
        page,
        amount,
      },
      ...args
    );
  };

  return {
    ...api,
    fire,
    page,
    calcPages: (total: number) => Math.ceil(total / amount),
    amount,
    setPage,
    setAmount,
  };
};
