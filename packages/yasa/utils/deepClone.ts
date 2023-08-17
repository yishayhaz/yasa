import { AnyObject } from "../types";

export function deepClone(obj: AnyObject): AnyObject {
  if (
    obj instanceof Function ||
    obj instanceof RegExp ||
    obj instanceof Date ||
    obj === null
  ) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  if (Object(obj) === obj) {
    const newObj: AnyObject = {};
    Object.keys(obj).forEach((key) => (newObj[key] = deepClone(obj[key])));
    return newObj;
  }
  return obj;
}
