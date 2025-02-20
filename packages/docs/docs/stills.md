---
id: stills
title: Still images
---

_Available from v2.3_

Remotion is a great solution for rendering dynamic still images too. See our [Still template](https://github.com/remotion-dev/template-still) for an easy way to get started.

If you already have a Remotion project, read on how you can render stills.

## Defining a still

Use the [`<Still />`](/docs/still) component instead of the [`<Composition />`](/docs/composition) one to define a still. The timeline will disappear, and you will not have to define a duration or FPs value.

## Rendering via CLI

You can use the [`npx remotion still`](/docs/cli/#npx-remotion-still) command to render a still image. Example command:

```bash
npx remotion still --props='{"custom": "data"}' src/index.tsx my-comp out.png
```

You can use the `--image-format` flag to determine the output format. The default format is `png`, with `jpeg` being the other option.

By default the frame with number of a composition is being rendered, you can control it using the `--frame` flag.

## Rendering using Node.JS

You can use the [`renderStill()`](/docs/renderer/render-still) Node.JS API to render a still frame programmatically.

## Rendering using serverless

You can use [Remotion Lambda](/lambda) to render stills:

- Via [CLI](/docs/lambda/cli/still)
- Via the [renderStillOnLambda](/docs/lambda/renderstillonlambda) API.
