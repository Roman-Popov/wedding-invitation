/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cn from 'classnames';
import { createBlock } from '@/utils';
import type { MapDataType, ControlDataType } from '../with-map';
import './map-controls.scss';

type MapControlsProps = {
  controlData: null | undefined | ControlDataType,
  isFullScreen?: boolean,
  mapData: null | undefined | MapDataType,
  onFullScreenToggle: () => any,
  onMapReset: () => any,
  showResetButton?: boolean,
};

const block = createBlock('map-controls');

const MapControls = (props: MapControlsProps) => {
  const {
    controlData,
    isFullScreen = false,
    mapData,
    onFullScreenToggle,
    onMapReset,
    showResetButton = false,
  } = props;

  if (!mapData) {
    return null;
  }

  const { YMapControls, YMapControl } = mapData;

  return (
    <>
      {controlData && (
        <YMapControls position="left">
          <controlData.YMapZoomControl />
        </YMapControls>
      )}
      <YMapControls position="top left" orientation="horizontal">
        {controlData && <controlData.YMapGeolocationControl />}
        {showResetButton && (
        <YMapControl>
          <div
            tabIndex={0}
            role="button"
            className={block.element('btn')}
            onClick={onMapReset}
          >
            Сбросить карту
          </div>
        </YMapControl>
        )}
      </YMapControls>
      <YMapControls position="top right">
        <YMapControl>
          <div
            aria-label="toggle fullscreen"
            tabIndex={0}
            role="button"
            className={cn(
              block.element('btn'),
              block.modifyElement('btn', 'fullscreen'),
              block.modifyElement('btn', isFullScreen ? 'exit-fullscreen' : 'enter-fullscreen'),
            )}
            onClick={onFullScreenToggle}
          />
        </YMapControl>
      </YMapControls>
      <YMapControls position="bottom left">
        {/* // NOTE [RP] 2025-02-03: keep it to hide yandex copyrights */}
      </YMapControls>
    </>
  );
};

export const MemoizedMapControls = React.memo(MapControls);
