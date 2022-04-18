import {
  FormControl,
  FormLabel,
  Input,
  Paper,
  SxProps,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useT } from '../../locales/hooks/useT';
import { ScoringSettings as Settings } from '../models/ScoringSettings';

export const ScoringSettings = ({
  settings,
  onSetSettings,
  sx,
}: {
  settings: Settings;
  onSetSettings: (s: Settings) => void;
  sx?: SxProps;
}) => {
  const t = useT();
  return (
    <Paper
      sx={{ flexGrow: 1, display: 'flex', gap: 2, flexDirection: 'column', padding: 2, ...sx }}
    >
      <FormControl>
        <FormLabel sx={{ mb: 1 }}>{t.chungJai}</FormLabel>
        <ToggleButtonGroup
          value={settings.chungJai}
          exclusive
          onChange={(_, chungJai: Settings['chungJai']) =>
            chungJai && onSetSettings({ ...settings, chungJai })
          }
          fullWidth
        >
          <ToggleButton value="half" data-name="ScoringSettingChungJaiHalf">
            {t.chungJais.half}
          </ToggleButton>
          <ToggleButton value="full" data-name="ScoringSettingChungJaiFull">
            {t.chungJais.full}
          </ToggleButton>
        </ToggleButtonGroup>
      </FormControl>

      <FormControl>
        <FormLabel sx={{ mb: 1 }}>{t.chipValue}</FormLabel>
        <ToggleButtonGroup
          value={settings.chipValue}
          exclusive
          onChange={(_, chipValue: number) =>
            chipValue && onSetSettings({ ...settings, chipValue })
          }
          fullWidth
        >
          {(
            [
              {
                value: 0.25,
                chipValueName: t.chipValues.c25chicken,
                dataName: 'ScoringSettingsChipValue25Chicken',
              },
              {
                value: 0.5,
                chipValueName: t.chipValues.c51,
                dataName: 'ScoringSettingsChipValue51',
              },
              {
                value: 1,
                chipValueName: t.chipValues.c12mosquitoes,
                dataName: 'ScoringSettingsChipValue12Mosquitoes',
              },
            ] as const
          ).map(({ value, chipValueName, dataName }, i) => (
            <ToggleButton value={value} key={i} data-name={dataName}>
              {chipValueName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </FormControl>

      <FormControl>
        <FormLabel sx={{ mb: 1 }}>{t.halfSpicyFrom}</FormLabel>
        <ToggleButtonGroup
          value={settings.halfSpicyFrom}
          exclusive
          onChange={(_, halfSpicyFrom: number) =>
            halfSpicyFrom && onSetSettings({ ...settings, halfSpicyFrom })
          }
          fullWidth
          sx={{ mb: 1 }}
        >
          <ToggleButton value={Number.POSITIVE_INFINITY}>{t.halfSpicyFroms.never}</ToggleButton>
          <ToggleButton value={4}>4</ToggleButton>
        </ToggleButtonGroup>
        <Input
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]{2}',
          }}
          value={
            [Number.POSITIVE_INFINITY, 4].includes(settings.halfSpicyFrom)
              ? ''
              : settings.halfSpicyFrom
          }
          onChange={event =>
            onSetSettings({ ...settings, halfSpicyFrom: Number.parseInt(event.target.value) || 4 })
          }
          placeholder={t.halfSpicyFroms.customPlaceholder}
          sx={{ alignSelf: 'flex-start', pt: 1, pl: 1, pr: 1 }}
        />
      </FormControl>
    </Paper>
  );
};
