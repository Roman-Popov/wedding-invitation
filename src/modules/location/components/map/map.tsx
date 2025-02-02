import React, { useState, useRef, useEffect } from 'react';
import type { YMapLocationRequest, MapEventUpdateHandler, LngLat } from 'ymaps3';
import cn from 'classnames';
import { createBlock } from '@/utils';
import {
  BOUNDS,
  DINNER_COORDINATES,
  LOCATION,
  WEDDING_COORDINATES,
} from '../../location-constants';
import { withMap } from '../with-map';
import { MapControls } from '../map-controls';
import { NoDataBlock } from '../no-data-block';
import './map.scss';

type LocationProps = {
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
};

const block = createBlock('map');

const getMapUrl = (coords: LngLat) => (
  `https://yandex.ru/maps?whatshere%5Bpoint%5D=${coords[0]}%2C${coords[1]}&z=17`
);

const Map = withMap<LocationProps>((props) => {
  const { mapData, controlData, containerRef } = props;

  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const [_, setForceUpdateCounter] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const runtimeLocationRef = useRef<null | YMapLocationRequest>(LOCATION);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullScreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const onMapUpdate: MapEventUpdateHandler = ({ location: updatedLocation }) => {
    setShowResetButton(true);
    runtimeLocationRef.current = updatedLocation;
  };

  const onMapReset = () => {
    runtimeLocationRef.current = { ...LOCATION };
    // NOTE [RP] 2024-10-03: to let button disappear
    setForceUpdateCounter((prev) => prev + 1);
    setTimeout(() => { setShowResetButton(false); }, 0);
  };

  const onFullScreenToggle = () => {
    const container = containerRef.current;
    if (container) {
      if (isFullScreen) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
      }
    }
  };

  if (!mapData || !containerRef.current) {
    return (
      <NoDataBlock
        type={mapData === null ? 'error' : 'loading'}
      />
    );
  }

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapListener,
  } = mapData;

  return (
    <>
      <YMap
        location={runtimeLocationRef.current!}
        restrictMapArea={BOUNDS}
        zoomRange={{ min: 9, max: 22 }}
        mode="vector"
      >
        <YMapDefaultFeaturesLayer />
        <YMapDefaultSchemeLayer />
        <YMapMarker coordinates={WEDDING_COORDINATES}>
          <div
            className={cn(
              block.element('marker'),
              block.modifyElement('marker', 'blue'),
            )}
          />
        </YMapMarker>
        <YMapMarker coordinates={DINNER_COORDINATES}>
          <div
            className={cn(
              block.element('marker'),
              block.modifyElement('marker', 'red'),
            )}
          />
        </YMapMarker>
        <MapControls
          controlData={controlData}
          isFullScreen={isFullScreen}
          mapData={mapData}
          onFullScreenToggle={onFullScreenToggle}
          onMapReset={onMapReset}
          showResetButton={showResetButton}
        />
        <YMapListener
          onUpdate={onMapUpdate}
        />
      </YMap>
      <div className={block.element('navigate')}>
        <div className={block.element('hint')}>Проложить маршрут:</div>
        <div className={block.element('btn-wrapper')}>
          <a
            className={cn(block.element('btn'), block.modifyElement('btn', 'blue'))}
            rel="noopener noreferrer"
            target="_blank"
            href={getMapUrl(WEDDING_COORDINATES)}
          >
            В ЗАГС
          </a>
          <a
            className={cn(block.element('btn'), block.modifyElement('btn', 'red'))}
            rel="noopener noreferrer"
            target="_blank"
            href={getMapUrl(DINNER_COORDINATES)}
          >
            В ресторан
          </a>
        </div>
      </div>
    </>
  );
});

export const MemoizedMap = React.memo(Map);
