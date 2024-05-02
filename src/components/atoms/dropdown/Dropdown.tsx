import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

export interface DropdownItemType<T> {
  value: T
  label: string
}

export interface DropdownProps<T> {
  items: DropdownItemType<T>[]
  onItemClick: (item: DropdownItemType<T>) => void
}

function DropdownInner<T>({ items, onItemClick }: DropdownProps<T>, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className="absolute top-[100%] left-0 mt-2 z-20 bg-grey-800 w-full rounded-2 border-[1px] border-gray-600 p-2.5"
    >
      {items.map((item, i) => {
        return (
          <div
            onClick={() => onItemClick(item)}
            key={i}
            className={clsx(
              'transition-all cursor-pointer mb-2 last:mb-0 py-1 px-2 text-gray-300 text-3.5 rounded-1',
              'hover:bg-gray-600 hover:text-gray-100'
            )}
          >
            <p>{item.label}</p>
          </div>
        )
      })}
    </div>
  )
}

export const Dropdown = forwardRef(DropdownInner) as <T>(
  props: DropdownProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof DropdownInner>
