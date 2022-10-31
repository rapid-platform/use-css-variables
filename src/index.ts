import React, { useEffect } from "react";

/**
 * Adds CSS variables to the supplied ref
 *
 * @param {React.MutableRefObject<any>} ref - react mutable ref object for element to add varibales too
 * @param {S extends Record<string, string, number, undefined>} styles - object to map to css variables
 * @param {React.DependencyList} [deps] - A list of dependencies that when changed, re-compute class names.
 */
export function useCssVariables<
  S = Record<string, string | number | undefined>
>(
  ref: React.MutableRefObject<any>,
  styles: S,
  deps?: React.DependencyList
): void {
  useEffect(onStylesChanged, deps);

  function onStylesChanged() {
    if (!ref || !styles) return;

    for (const [key, value] of Object.entries(styles)) {
      if (value === undefined || value === null) {
        ref.current?.style.setProperty(`--${key}`, "unset");
      } else {
        ref.current?.style.setProperty(`--${key}`, value);
      }
    }
  }
}
