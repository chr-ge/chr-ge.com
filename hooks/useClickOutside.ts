/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef, RefObject, useCallback } from 'react'
import { getOwnerDocument } from '@chakra-ui/utils'

export interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>
}

function useOutsideClick({ ref }: UseOutsideClickProps) {
  const [isOpen, setIsOpen] = useState(false)

  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
  })

  const onClose = () => setIsOpen(false)

  const onOpen = () => setIsOpen(true)

  const onToggle = useCallback(() => {
    const action = isOpen ? onClose : onOpen
    action()
  }, [isOpen, onOpen, onClose])

  useEffect(() => {
    const onPointerDown: any = (e: PointerEvent) => {
      if (isValidEvent(e, ref)) {
        stateRef.current.isPointerDown = true
      }
    }

    const onMouseUp: any = (event: MouseEvent) => {
      if (stateRef.current.ignoreEmulatedMouseEvents) {
        stateRef.current.ignoreEmulatedMouseEvents = false
        return
      }

      if (stateRef.current.isPointerDown && isValidEvent(event, ref)) {
        stateRef.current.isPointerDown = false
        onClose()
      }
    }

    const onTouchEnd = (event: TouchEvent) => {
      stateRef.current.ignoreEmulatedMouseEvents = true
      if (stateRef.current.isPointerDown && isValidEvent(event, ref)) {
        stateRef.current.isPointerDown = false
        onClose()
      }
    }

    const doc = getOwnerDocument(ref.current)
    doc.addEventListener('mousedown', onPointerDown, true)
    doc.addEventListener('mouseup', onMouseUp, true)
    doc.addEventListener('touchstart', onPointerDown, true)
    doc.addEventListener('touchend', onTouchEnd, true)

    return () => {
      doc.removeEventListener('mousedown', onPointerDown, true)
      doc.removeEventListener('mouseup', onMouseUp, true)
      doc.removeEventListener('touchstart', onPointerDown, true)
      doc.removeEventListener('touchend', onTouchEnd, true)
    }
  }, [ref, stateRef.current, isOpen])

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  }
}

export default useOutsideClick

function isValidEvent(event: any, ref: RefObject<HTMLElement>) {
  const target = event.target as HTMLElement
  if (event.button > 0) return false
  // if the event target is no longer in the document
  if (target) {
    const doc = getOwnerDocument(target)
    if (!doc.body.contains(target)) return false
  }

  return !ref.current?.contains(target)
}
