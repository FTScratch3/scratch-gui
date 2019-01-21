import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicImage from './music.png';
import musicInsetImage from './music-small.svg';
import penImage from './pen.png';
import penInsetImage from './pen-small.svg';
import videoImage from './video-sensing.png';
import videoInsetImage from './video-sensing-small.svg';
import translateImage from './translate.png';
import translateInsetImage from './translate-small.png';
import microbitImage from './microbit.png';
import ev3Image from './ev3.png';
import wedoImage from './wedo.png';
import text2speechImage from './text2speech.png';
import text2speechInsetImage from './text2speech-small.svg';
import makeymakeyImage from './makeymakey.png';
import makeymakeyInsetImage from './makeymakey-small.svg';
import txtImage from './txt_controller.png';
import btsmartImage from './btsmart.png';

import microbitPeripheralImage from './peripheral-connection/microbit/microbit-illustration.svg';
import microbitMenuImage from './peripheral-connection/microbit/microbit-small.svg';
import ev3PeripheralImage from './peripheral-connection/ev3/ev3-hub-illustration.svg';
import ev3MenuImage from './peripheral-connection/ev3/ev3-small.svg';
import wedoPeripheralImage from './peripheral-connection/wedo/wedo-illustration.svg';
import wedoDeviceImage from './peripheral-connection/wedo/wedo-illustration.svg';
import wedoMenuImage from './peripheral-connection/wedo/wedo-small.svg';
import wedoButtonImage from './peripheral-connection/wedo/wedo-button-illustration.svg';
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
        iconURL: musicImage,
        insetIconURL: musicInsetImage,
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
        iconURL: penImage,
        insetIconURL: penInsetImage,
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
        iconURL: videoImage,
        insetIconURL: videoInsetImage,
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
        iconURL: text2speechImage,
        insetIconURL: text2speechInsetImage,
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
        iconURL: translateImage,
        insetIconURL: translateInsetImage,
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
        helpLink: 'https://scratch.mit.edu/ev3' // TODO
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
        helpLink: 'https://scratch.mit.edu/ev3' // TODO
    }
];
