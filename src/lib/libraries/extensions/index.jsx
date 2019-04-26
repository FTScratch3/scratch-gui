import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';


import txtImage from './txt_controller.png';
import btsmartImage from './btsmart.png';
import txtImageBig from './peripheral-connection/ftxt/txt_controller.png';
import btsmartImageBig from './peripheral-connection/ftxt/btsmart.png';
import txtImageSmall from './peripheral-connection/ftxt/txt_controller_small.png';
import btsmartImageSmall from './peripheral-connection/ftxt/btsmart_small.png';
import txtImageEXE from './peripheral-connection/ftxt/ftscratchtxt_exe.png';
import btsmartImageEXE from './peripheral-connection/ftxt/ftscratcbtsmart_exe.png';


export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Robotics TXT Controller',
        extensionId: 'ftxt',
        collaborator: "FHWS",
        iconURL: txtImage,
        description: (
            <FormattedMessage
                defaultMessage="Control your Robotics TXT Controller"
                description="Control your Robotics TXT Controller"
                id="gui.extension.ftxt.description"
            />
        ),
        featured: true,
        disabled: false,
        useAutoScan: true,
        launchPeripheralConnectionFlow: true,
        connectDialog: {
            help: {
                icon0: txtImageEXE, //  TODO
                text0: (<FormattedMessage
                    defaultMessage="Make sure that FTScratchTXT.exe is running."
                    description="Make sure that FTScratchTXT.exe is running."
                    id="gui.extension.ftxt.help0"
                />),
                icon1: txtImageSmall, //  TODO
                text1: (<FormattedMessage
                    defaultMessage="Make sure that your controller is connected to the FTScratchTXT.exe."
                    description="Make sure that your controller is connected to the FTScratchTXT.exe."
                    id="gui.extension.ftxt.help1"
                />),
            },
            disableBTIcon: true
        },
        hideSearchBluetoothImage: true,
        bluetoothRequired: false,
        peripheralButtonImage: txtImageSmall,
        peripheralImage: txtImageBig,
        smallPeripheralImage: txtImageSmall,
        insetIconURL: txtImageSmall,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the FTScratchTXT.exe is running."
                description="Message to help people connect to their Robotics TXT Controller."
                id="gui.extension.txt.connectingMessage"
            />
        ),
        helpLink: 'https://www.ftscratch3.com/doc/ROBO-TXT/index.html'
    },
    {
        name: 'BTSmart',
        extensionId: 'ftbtsmart',
        collaborator: "FHWS",
        iconURL: btsmartImage,
        description: (
            <FormattedMessage
                defaultMessage="Control your Robotics BTSmart Controller"
                description="Control your Robotics BTSmart Controller"
                id="gui.extension.ftbtsmart.description"
            />
        ),
        featured: true,
        disabled: false,
        useAutoScan: true,
        launchPeripheralConnectionFlow: true,
        connectDialog: {
            help: {
                icon0: btsmartImageEXE, //  TODO
                text0: (<FormattedMessage
                    defaultMessage="Make sure that FTScratchBTSmart.exe is running."
                    description="Make sure that FTScratchBTSmart.exe is running."
                    id="gui.extension.ftbtsmart.help0"
                />),
                icon1: btsmartImageSmall, //  TODO
                text1: (<FormattedMessage
                    defaultMessage="Make sure that your controller is connected to the FTScratchBTSmart.exe."
                    description="Make sure that your controller is connected to the FTScratchBTSmart.exe."
                    id="gui.extension.ftbtsmart.help1"
                />),
            },
            disableBTIcon: true
        },
        hideSearchBluetoothImage: true,
        bluetoothRequired: false,
        peripheralButtonImage: btsmartImageSmall,
        peripheralImage: btsmartImageBig,
        smallPeripheralImage: btsmartImageSmall,
        insetIconURL: btsmartImageSmall,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the FTScratchBTSmart.exe is running."
                description="Message to help people connect to their Robotics TXT Controller."
                id="gui.extension.ftbtsmart.connectingMessage"
            />
        ),
        helpLink: 'https://www.ftscratch3.com/doc/BTSmart/index.html'
    }
];
