import type { WithChildren, WithoutChildren } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p' | 'span';
export type TypographyDecompose = 'letters' | 'words' | undefined;

export type TypographyPropsWithoutHTML = WithChildren<{
	ref?: HTMLElement | null;
}>;

export type TypographyProps = TypographyPropsWithoutHTML &
	WithoutChildren<
		Omit<
			HTMLAttributes<
				HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
			>,
			'variant' | 'decompose'
		>
	> & {
		variant: TypographyVariant;
		decompose?: TypographyDecompose;
	};
