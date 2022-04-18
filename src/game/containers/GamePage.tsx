import { BottomNavigation, BottomNavigationAction, Box, Container, Icon } from '@mui/material';
import { ReactNode, useCallback, useContext, useMemo } from 'react';
import { usePromptBeforeUnload } from '../../common/hooks/usePromptBeforeUnload';
import { ChartPage } from '../../game-chart/containers/ChartPage';
import { SettingsPage } from '../../game-settings/containers/SettingsPage';
import { useT } from '../../locales/hooks/useT';
import { RouterViewSwitch } from '../../router/components/RouterViewSwitch';
import { useRouterContext } from '../../router/hooks/useRouterContext';
import { GameContext } from '../contexts/GameContext';
import { TablePage } from './TablePage';

const BottomMenu = <T extends string>({
  items,
  selectedItemId,
  onSelectedItemIdChange,
}: {
  items: readonly { id: T; label: string; icon: ReactNode; dataName?: string }[];
  selectedItemId?: T;
  onSelectedItemIdChange: (id: T) => void;
}) => {
  return (
    <BottomNavigation
      showLabels
      value={items.findIndex(({ id }) => id === selectedItemId)}
      onChange={(_, newIndex) => {
        const item = items[newIndex];
        if (!item) throw new Error(`cannot find item at index ${newIndex}`);
        onSelectedItemIdChange(item.id);
      }}
      sx={{ width: '100%' }}
    >
      {items.map(({ label, icon, dataName }, i) => (
        <BottomNavigationAction label={label} icon={icon} key={i} data-name={dataName} />
      ))}
    </BottomNavigation>
  );
};

const useBottomMenuRouterViewSwitch = <T extends string>(
  views: readonly {
    path: T;
    label: string;
    icon: ReactNode;
    component: () => JSX.Element;
    dataName?: string;
  }[],
) => {
  const { currentLocation, navigate } = useRouterContext();

  const items = useMemo(
    () => views.map(({ path, label, icon, dataName }) => ({ id: path, label, icon, dataName })),
    [views],
  );

  return [
    useCallback(() => <RouterViewSwitch views={views} />, [views]),
    useCallback(
      () => (
        <BottomMenu
          items={items}
          selectedItemId={currentLocation.path}
          onSelectedItemIdChange={path => navigate({ path })}
        />
      ),
      [currentLocation, navigate, items],
    ),
  ] as const;
};

export const GamePage = () => {
  const t = useT();
  const { rounds } = useContext(GameContext);

  usePromptBeforeUnload(t.beforeUnloadMessage, {
    active: useMemo(() => rounds.length > 0, [rounds.length]),
  });

  const [RouterView, BottomMenu] = useBottomMenuRouterViewSwitch(
    useMemo(
      () =>
        [
          {
            path: '/chart',
            label: t.bottomMenu.chart,
            icon: <Icon>stacked_line_chart</Icon>,
            component: ChartPage,
          },
          {
            path: '/table',
            label: t.bottomMenu.table,
            icon: <Icon>list_alt</Icon>,
            component: TablePage,
            dataName: 'GamePageBottomNavTableButton',
          },
          {
            path: '/settings',
            label: t.bottomMenu.settings,
            icon: <Icon>settings</Icon>,
            component: SettingsPage,
          },
        ] as const,
      [t],
    ),
  );

  return (
    <Box sx={{ pb: 20 }}>
      <RouterView />

      <Container maxWidth="xl" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <BottomMenu />
      </Container>
    </Box>
  );
};
