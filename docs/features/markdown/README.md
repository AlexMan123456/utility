**@alextheman/utility v4.3.0**

***

# @alextheman/utility

This is my personal utility package. It provides custom utility functions that can be used in more or less any TypeScript or JavaScript project, using either the browser or Node environment.

## Installation

To install this into your project, you can do so with the following command:

```bash
npm install @alextheman/utility
```

From there, you may import any of the package's functions.

## Quick start

You can import and use any function or type from the package in the following way:

```typescript
import type { NonUndefined } from "@alextheman/utility";

import { formatDateAndTime } from "@alextheman/utility";

const myVariable: NonUndefined<string> = formatDateAndTime(new Date());
// ...
```
