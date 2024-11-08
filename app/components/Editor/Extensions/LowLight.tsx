import React from 'react'
import { all, createLowlight } from 'lowlight'

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

export const lowlight = createLowlight(all)

lowlight.register('html', html);
lowlight.register('css', css);
lowlight.register('javascript', js); // Use 'javascript' instead of 'js' for consistency
lowlight.register('typescript', ts); // Use 'typescript' instead of 'ts' for consistency

