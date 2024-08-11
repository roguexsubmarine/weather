import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

// import ncloud from '../assets/cloud-moon.svg';
// import dcloud from '../assets/cloud-sun.svg';

import cloud from '../assets/cloud.svg';
import light_rain from '../assets/drizzle.svg';
import fog from '../assets/fog.svg';
import hail from '../assets/hail.svg';
import rain from '../assets/rain.svg';
import storm from '../assets/thunderstorm.svg';
import snow from '../assets/snow.svg';

// import drizzle_day from '../assets/drizzle-sun.svg';
// import drizzle_night from '../assets/drizzle-night.svg';

export default function WeatherIcon ({ code, isday }) {

    // const sun_i = ["1000"];
    // const moon_i = ["1000"];
    
    const cloud_i = ["1003", "1006", "1009", "1030"];
    
    const light_rain_i = ["1063", "1150", "1153", "1168", "1180", "1183", "1198", "1240", "1243", "1246"];
    const rain_i = ["1171", "1186", "1189", "1192", "1195", "1201"];
    const storm_i = ["1087", "1249", "1252", "1273", "1276", "1279", "1283"];

    const snow_i = ["1066", "1069", "1114", "1117", "1204", "1207", "1213", "1216", "1219", "1222", "1225", "1255", "1258"];
    const hail_i = ["1072", "1237", "1261", "1264"];
    const fog_i = ["1135", "1147"];


    if(code.toString() === "1000"){
        if(isday) {
            return sun;
        }
        else{
            return moon;
        }
    }
    // else if (ncloud_i.includes(code.toString())){
    //     return <img src={ncloud} />;
    // }
    // else if (dcloud_i.includes(code.toString())){
    //     return <img src={dcloud} />;
    // }
    if (cloud_i.includes(code.toString())){
        return cloud;
    }
    else if (light_rain_i.includes(code.toString())){
        return light_rain;
    }
    else if (fog_i.includes(code.toString())){
        return fog;
    }
    else if (hail_i.includes(code.toString())){
        return hail;
    }
    else if (rain_i.includes(code.toString())){
        return rain;
    }
    else if (storm_i.includes(code.toString())){
        return storm;
    }
    else if (snow_i.includes(code.toString())){
        return snow;
    }
    // else if (drizzle_day_i.includes(code.toString())){
    //     return <img src={drizzle_day} />;
    // }
    // else if (drizzle_night_i.includes(code.toString())){
    //     return <img src={drizzle_night} />;
    // }
    else {
        return sun;
    }
};
