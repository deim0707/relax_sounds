import React from "react";

import forestSound from '../../assets/audio/forest2.mp3';
import rainSound from '../../assets/audio/thunderstorm.mp3';
import thunderstormSound from '../../assets/audio/thunderstorm2.mp3';
import windSound from '../../assets/audio/wind.mp3';
import trainSound from '../../assets/audio/train.mp3';
import bonfireSound from '../../assets/audio/bonfire1.mp3';
import southForestSound from '../../assets/audio/south_forest.mp3';
import birdSound from '../../assets/audio/birds.mp3';
import seaBirdSound from '../../assets/audio/sea_birds.mp3';

import BirdIcon from "../../assets/icons/bird.svg";
import BonfireIcon from "../../assets/icons/bonfire.svg";
import ForestIcon from "../../assets/icons/forest.svg";
import RainIcon from "../../assets/icons/rain.svg";
import SeaBirdIcon from "../../assets/icons/seaBird.svg";
import SouthForestIcon from "../../assets/icons/southForest.svg";
import ThunderstormIcon from "../../assets/icons/thunderstorm.svg";
import TrainIcon from "../../assets/icons/train.svg";
import WindIcon from "../../assets/icons/wind.svg";



const itemsConfig = {
    forest: {icon: ForestIcon, sound: forestSound},
    rain: {icon: RainIcon, sound: rainSound},
    thunderstorm: {icon: ThunderstormIcon, sound: thunderstormSound},
    wind: {icon: WindIcon, sound: windSound},
    train: {icon: TrainIcon, sound: trainSound},
    bonfire: {icon: BonfireIcon, sound: bonfireSound},
    southForest: {icon: SouthForestIcon, sound: southForestSound},
    bird: {icon: BirdIcon, sound: birdSound},
    seaBird: {icon: SeaBirdIcon, sound: seaBirdSound},



};

export default itemsConfig;