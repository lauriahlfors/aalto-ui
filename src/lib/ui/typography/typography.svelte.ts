import type { TypographyDecompose } from './types';

/**
 * Decomposes the text content of an HTML element in to separate <span/>
 * elements based on the given decomposition methdod.
 *
 * Used for animation/transition purposes.
 *
 * @param {string} id - ID of the target HTML element.
 * @param {TypographyDecompose} decompose - Method of decomposition.
 *
 * @throws {Error} If the element by the given ID is not found or the text
 * content by of the element with the given ID is null.
 */
export function decomposeTextContent(
	id: string,
	decompose: TypographyDecompose
) {
	// Get element based on the UUID
	const node = document.getElementById(id);

	// Check if the element exists and has text content
	if (node === null || node.textContent === null)
		throw Error('element not found');

	// Init regex pattern based on the specified decomposition method
	const decomposeHelper = { regExp: {} as RegExp, identifierClass: '' };

	// Pattern for decomposing into letters
	if (decompose === 'letters') {
		decomposeHelper.regExp = /\S/g;
		decomposeHelper.identifierClass = 'letter';
	}

	// Pattern for decomposing into words
	if (decompose === 'words') {
		decomposeHelper.regExp = /\S+/g;
		decomposeHelper.identifierClass = 'word';
	}

	// Wrap each matched segment in a <span> with the appropriate class
	if (decomposeHelper.regExp !== undefined) {
		node.innerHTML = node.textContent.replace(
			decomposeHelper.regExp,
			`<span class='${decomposeHelper.identifierClass}'>$&</span>`
		);
	}
}
