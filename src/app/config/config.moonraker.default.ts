import { BackendType, Config } from './config.model';

// FIXME
export const moonrakerConfig: Partial<Config> = {
  backend: {
    type: BackendType.MOONRAKER,
    url: 'http://vcore-3.local:7125',
    accessToken: '',
    pollingInterval: 2000,
    commands: {
      disableExtruder: 'SET_STEPPER_ENABLE STEPPER=extruder ENABLE=0',
      babystepZ: 'SET_GCODE_OFFSET MOVE=1 Z_ADJUST=',
    },
  },
};
