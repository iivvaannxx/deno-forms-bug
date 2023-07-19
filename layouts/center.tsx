import { ComponentChildren, JSX } from 'preact'

/** @brief The props for the \<Center\> component. */
type Props = JSX.HTMLAttributes<HTMLDivElement> & {

  children?: ComponentChildren

  vertical?: boolean
  horizontal?: boolean
}

/** @brief Centers the given children on the given axes. */
export default function Center ({ children, vertical = true, horizontal = true, class: clazz, ...otherProps }: Props) {

  // Calculate the alignment classes.
  let alignment = clazz ? `${clazz} flex` : `flex`
  alignment += vertical ? ' items-center' : ''
  alignment += horizontal ? ' justify-center' : ''

  return (

    <div class={alignment} {...otherProps}>
      {children}
    </div>
  )
}
