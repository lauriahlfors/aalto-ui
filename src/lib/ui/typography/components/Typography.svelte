<script lang="ts">
	import { cn } from '$lib/utils';
	import { nanoid } from 'nanoid/non-secure';
	import { onMount } from 'svelte';
	import { tv } from 'tailwind-variants';
	import type { TypographyProps } from '../types';
	import { decomposeTextContent } from '../typography.svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		variant,
		decompose,
		...props
	}: TypographyProps = $props();

	// Create an unique ID for the element
	const elementID: string = nanoid(8);

	const styles = tv({
		base: 'antialiased font-normal tracking-[var(--aalto-tracking)] font-[var(--aalto-font)]',
		variants: {
			variant: {
				h1: 'md:text-7xl font-medium tracking-[var(--aalto-heading-tracking)] text-[var(--aalto-primary)]',
				h2: 'md:text-5xl font-medium  text-[var(--aalto-primary)]',
				h3: 'md:text-3xl font-medium text-[var(--aalto-primary)]',
				p: 'md:text-base text-[var(--aalto-secondary)]',
				span: 'md:text-base text-[var(--aalto-secondary)]',
			},
		},
	});

	onMount(() => {
		if (decompose !== undefined) {
			decomposeTextContent(elementID, decompose);
		}
	});
</script>

<svelte:element
	this={variant}
	id={elementID}
	bind:this={ref}
	class={cn(styles({ variant: variant }), className)}
	{...props}
>
	{@render children?.()}
</svelte:element>
