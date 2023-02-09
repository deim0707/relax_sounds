import React from "react";

import forestSound from '../../audio/forest2.mp3';
import rainSound from '../../audio/thunderstorm.mp3';
import thunderstormSound from '../../audio/thunderstorm2.mp3';
import windSound from '../../audio/wind.mp3';
import trainSound from '../../audio/train.mp3';
import bonfireSound from '../../audio/bonfire1.mp3';
import southForestSound from '../../audio/south_forest.mp3';
import birdSound from '../../audio/birds.mp3';
import seaBirdSound from '../../audio/sea_birds.mp3';

import BirdIcon from "../../icons/bird.svg";
import BonfireIcon from "../../icons/bonfire.svg";
import ForestIcon from "../../icons/forest.svg";
import RainIcon from "../../icons/rain.svg";
import SeaBirdIcon from "../../icons/seaBird.svg";
import SouthForestIcon from "../../icons/southForest.svg";
import ThunderstormIcon from "../../icons/thunderstorm.svg";
import TrainIcon from "../../icons/train.svg";
import WindIcon from "../../icons/wind.svg";



const itemsConfig = {
    forest: {icon: <ForestIcon/>, sound: forestSound},
    rain: {icon: <RainIcon/>, sound: rainSound},
    thunderstorm: {icon: <ThunderstormIcon/>, sound: thunderstormSound},
    wind: {icon: <WindIcon/>, sound: windSound},
    train: {icon: <TrainIcon/>, sound: trainSound},
    bonfire: {icon: <BonfireIcon/>, sound: bonfireSound},
    southForest: {icon: <SouthForestIcon/>, sound: southForestSound},
    bird: {icon: <BirdIcon/>, sound: birdSound},
    seaBird: {icon: <SeaBirdIcon/>, sound: seaBirdSound},



};

export default itemsConfig;