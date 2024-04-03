// Import the necessary modules using ES module syntax
import { createReadStream } from 'fs';
import { writeFile } from 'fs/promises';
import csv from 'csv-parser';

const bibleData = {};

createReadStream('E:/bibles/kjv-bible-only.csv') // Update the path to your CSV file
	.pipe(csv())
	.on('data', (row) => {
		const { book, chapter, verse, text } = row; // Assuming 'text' holds the verse text

		if (!bibleData[book]) {
			bibleData[book] = {};
		}

		if (!bibleData[book][chapter]) {
			bibleData[book][chapter] = [];
		}

		bibleData[book][chapter].push({ verse, text }); // Store verse number and text
	})
	.on('end', async () => {
		// Construct the module content
		const moduleContent = `export const bibleStructure = ${JSON.stringify(bibleData, null, 2)};`;

		try {
			// Save the structured data as a JS module with .js extension
			await writeFile('src\\lib\\bibleStructure.js', moduleContent);
			console.log('The module has been saved!');
		} catch (err) {
			console.error('Error writing module:', err);
		}
	});
