import React,{ FC, memo, useLayoutEffect, useRef } from 'react'
import {
    Panel,
    PanelHeader,
    Spacing,
    useAdaptivityWithJSMediaQueries,
  } from '@vkontakte/vkui'
import Places from '../components/Places/Places'
import { imageIntersectionObserver, findImage } from 'src/utils'

import './Store.css'

const MOBILE_LIMIT = 12
const DESKTOP_LIMIT = 40


export const Store = () => {

  const { isDesktop } = useAdaptivityWithJSMediaQueries()
  const limit = isDesktop ? DESKTOP_LIMIT : MOBILE_LIMIT

  const scrollPosition = useRef(0)
  const isSavedContent = useRef(store.products.length > 0)
  const observer = useRef<IntersectionObserver | null>(null)
  const lastLoadItemIndex = useRef(store.products.length || limit)
  const $storeContainer = useRef<HTMLDivElement>(null)




  const onHandleScroll = (e) => {
    scrollPosition.current = e.currentTarget.scrollTop
  }


  /** Восстановление скролла */
  useLayoutEffect(() => {
    if (!$storeContainer.current) return
    $storeContainer.current.scrollTop = store.scrollPosition
    scrollPosition.current = store.scrollPosition
  }, [store.scrollPosition, limit])



  return (
    <Panel className="Panel__fullScreen" {...props}>
      {!isDesktop && (
        <>
          <PanelHeader separator={false}>VK-место</PanelHeader>
          <Filters />
        </>
      )}

      <div ref={$storeContainer} className={'Store'} onScroll={onHandleScroll}>
        <Places  />
        {isDesktop && (
          <div className="Sidebar">
            <Spacing size={1} />
            <CartCountIsland />
            <Filters />
            <TechInfo sections={SECTIONS} items={ITEMS} />
          </div>
        )}
      </div>
    </Panel>
  )
}