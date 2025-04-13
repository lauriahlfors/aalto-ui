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

	const styles = tv({ base: 'antialiased font-normal tracking-tight' });

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
	class={cn(styles, className)}
	{...props}
>
	{@render children?.()}
</svelte:element>
