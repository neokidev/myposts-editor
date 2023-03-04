import Markdoc, { type Config } from '@markdoc/markdoc'
import { config } from './config'
import React from 'react'

export const renderMarkdownContent = (content: string) => {
  const ast = Markdoc.parse(content)
  const transformed = Markdoc.transform<Config>(ast, config)
  return Markdoc.renderers.react(transformed, React)
}
