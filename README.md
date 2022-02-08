# Demo of storybook with custom tsconfig

The `libs/utils/tsconfg.json` has `strict: false` so util compiles. 

The `libs/ui-button/.storybook/tsconfg.json` has `strict: true` so a type error is surfaced, but storybook is still able to run.

Try running:

```bash
npx nx serve ui-button
```