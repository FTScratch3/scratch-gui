import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicImage from './music.png';
import penImage from './pen.png';
import videoImage from './video-sensing.png';
import translateImage from './translate.png';
import microbitImage from './microbit.png';
import ev3Image from './ev3.png';
import wedoImage from './wedo.png';

import microbitDeviceImage from './device-connection/microbit/microbit-illustration.svg';
import microbitMenuImage from './device-connection/microbit/microbit-small.svg';
import ev3DeviceImage from './device-connection/ev3/ev3-hub-illustration.svg';
import ev3MenuImage from './device-connection/ev3/ev3-small.svg';
import wedoDeviceImage from './device-connection/wedo/wedo-illustration.svg';
import wedoMenuImage from './device-connection/wedo/wedo-small.svg';
import wedoButtonImage from './device-connection/wedo/wedo-button-illustration.svg';
import txtImage from './device-connection/ftxt/txt_controller.png';
import txtImageSmall from './device-connection/ftxt/txt_controller_small.png';
import btsmartImage from './device-connection/ftxt/btsmart.png';
import btsmartImageSmall from './device-connection/ftxt/btsmart_small.png';

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
                defaultMessage="Google Translate"
                description="Name for the 'Google Translate' extension. Do not translate 'Google'."
                id="gui.extension.googletranslate.name"
            />
        ),
        extensionId: 'translate',
        iconURL: translateImage,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the 'Google Translate' extension"
                id="gui.extension.googletranslate.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        iconURL: microbitImage,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: true,
        launchDeviceConnectionFlow: true,
        useAutoScan: false,
        deviceImage: microbitDeviceImage,
        smallDeviceImage: microbitMenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        iconURL: ev3Image,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: true,
        launchDeviceConnectionFlow: true,
        useAutoScan: false,
        deviceImage: ev3DeviceImage,
        smallDeviceImage: ev3MenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO WeDo 2.0',
        extensionId: 'wedo2',
        iconURL: wedoImage,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: true,
        launchDeviceConnectionFlow: true,
        useAutoScan: true,
        deviceImage: wedoDeviceImage,
        smallDeviceImage: wedoMenuImage,
        deviceButtonImage: wedoButtonImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Robotics TXT Controller',
        extensionId: 'ftxt',
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
        launchDeviceConnectionFlow: true,
        connectDialog: {
            help: {
                icon0: "", //  TODO
                text0: (<FormattedMessage
                        defaultMessage="Make sure that FTScratchTXT.exe is running."
                        description="Make sure that FTScratchTXT.exe is running."
                        id="gui.extension.ftxt.help0"
                    />),
                icon1: "", //  TODO
                text1: (<FormattedMessage
                    defaultMessage="Make sure that your controller is connected to the FTScratchTXT.exe."
                    description="Make sure that your controller is connected to the FTScratchTXT.exe."
                    id="gui.extension.ftxt.help1"
                />),
            }
        },
        hideSearchBluetoothImage: true,
        deviceButtonImage: txtImageSmall,
        deviceImage: txtImage,
        smallDeviceImage: txtImageSmall,
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
        launchDeviceConnectionFlow: true,
        connectDialog: {
            help: {
                icon0: "", //  TODO
                text0: (<FormattedMessage
                        defaultMessage="Make sure that FTScratchBTSmart.exe is running."
                        description="Make sure that FTScratchBTSmart.exe is running."
                        id="gui.extension.ftbtsmart.help0"
                    />),
                icon1: "", //  TODO
                text1: (<FormattedMessage
                    defaultMessage="Make sure that your controller is connected to the FTScratchBTSmart.exe."
                    description="Make sure that your controller is connected to the FTScratchBTSmart.exe."
                    id="gui.extension.ftbtsmart.help1"
                />),
            }
        },
        hideSearchBluetoothImage: true,
        deviceButtonImage: btsmartImageSmall,
        deviceImage: btsmartImage,
        smallDeviceImage: btsmartImageSmall,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the FTScratchBTSmart.exe is running."
                description="Message to help people connect to their Robotics TXT Controller."
                id="gui.extension.ftbtsmart.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3' // TODO
    }
]
