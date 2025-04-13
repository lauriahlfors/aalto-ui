import type { Snippet } from 'svelte';

/**
 * Generic utility type that combines given Props with an optional children
 * property of type Snippet.
 *
 * @type Props - The properties to extend, default to an object with unknown
 * values.
 */
export type WithChildren<Props = Record<string, unknown>> = Props & {
	children?: Snippet | undefined;
};

/**
 * Generic conditional helper type that removes children property from a given
 * type.
 *
 * If Type includes `children` property of type `Snippet` it creates a
 * version of Type without `children`.
 *
 * @type Type - The type from which to optionally omit the `children` property.
 */
export type WithoutChildren<Type> = Type extends { children?: Snippet }
	? Omit<Type, 'children'>
	: Type;
