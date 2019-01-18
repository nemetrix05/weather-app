import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

// Title Structure

const TitleApp = ({ titulo }) => {

    const fecha = moment().format("DD/MM/YYYY, h:mm a");
  
    return (
      <div style={{ padding: 0, marginBottom: 30 }}>
        <Grid container spacing={0} alignItems='center' alignContent='center' justify='space-between'>
            <Grid item xs={12} sm={12} md={12}>
                <AppBar position="sticky" color="primary">
                  <Toolbar>
                    <Grid container direction="row" alignItems="center">
                        <Grid item md={6} sm={6} xs={6} >
                            <Typography variant="h6" color="inherit">
                                <div className="middle">
                                    <Icon color='inherit' className='material-icons' fontSize="large" style={{marginRight: 10}}>wb_incandescent</Icon>
                                </div>
                                <Hidden only="xs">
                                    <div className="middle">{titulo}</div>
                                </Hidden>
                            </Typography>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <Typography variant="body2" color="inherit" align="right" >{fecha}</Typography>
                        </Grid>
                    </Grid>
                  </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
      </div>
    )

}

TitleApp.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default TitleApp;