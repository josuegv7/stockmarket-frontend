import React from 'react';
import {LineChart} from 'react-easy-chart';

export default (props) => {
    return(
        <div>
            <LineChart
                xType = {'text'}
                axes width = {400}
                height = {200}
                interpolate = {'cardinal'}
                data = {props.data}
            />
        </div>
    )
}
