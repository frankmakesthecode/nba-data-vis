import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPerGame } from '../store/perGame';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export const Home = (props) => {
  const { perGame, loadPerGame } = props;

  useEffect(() => {
    loadPerGame();
  }, []);

  return (
    <div>
      <h3>Welcome to the Home Page</h3>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          icons={tableIcons}
          onRowClick={(event, rowData) => console.log(rowData)}
          columns={[
            { title: 'ID', field: 'id', hidden: true },
            { title: 'Name', field: 'name', grouping: false },
            { title: 'POS', field: 'position' },
            { title: 'Team', field: 'team' },
            {
              title: 'Minutes',
              field: 'minutes',
              type: 'numeric',
              grouping: false,
            },
            {
              title: 'FG%',
              field: 'fgPercent',
              type: 'numeric',
              grouping: false,
            },
            {
              title: 'Points',
              field: 'points',
              type: 'numeric',
              defaultSort: 'desc',
              grouping: false,
            },
            {
              title: 'Rebounds',
              field: 'rebounds',
              type: 'numeric',
              grouping: false,
            },
            {
              title: 'Assits',
              field: 'assists',
              type: 'numeric',
              grouping: false,
            },
            {
              title: 'Steals',
              field: 'steals',
              type: 'numeric',
              grouping: false,
            },
            {
              title: 'Blocks',
              field: 'blocks',
              type: 'numeric',
              grouping: false,
            },
            {
              title: 'Turnovers',
              field: 'turnovers',
              type: 'numeric',
              grouping: false,
            },
          ]}
          data={perGame.map((player) => {
            return {
              id: player.id,
              name: player.name,
              position: player.position,
              team: player.team,
              minutes: (Math.round(player.minutes * 10) / 10).toFixed(1),
              fgPercent: (player.fgPercent * 100).toFixed(1),
              points: (Math.round(player.points * 10) / 10).toFixed(1),
              rebounds: (Math.round(player.totalRebound * 10) / 10).toFixed(1),
              assists: (Math.round(player.assists * 10) / 10).toFixed(1),
              steals: (Math.round(player.steals * 10) / 10).toFixed(1),
              blocks: (Math.round(player.blocks * 10) / 10).toFixed(1),
              turnovers: (Math.round(player.turnovers * 10) / 10).toFixed(1),
            };
          })}
          options={{
            pageSize: 10,
            showTitle: false,
            grouping: true,
            searchFieldAlignment: 'left',
          }}
        />
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    perGame: state.perGame,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadPerGame: () => dispatch(fetchPerGame()),
  };
};

export default connect(mapState, mapDispatch)(Home);
