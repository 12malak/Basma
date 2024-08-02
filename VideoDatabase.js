(function () {
    "use strict";

    // The responsibility of this module is to provide information about videos to other modules.

    // The videos are defined here. Add your videos to this list.
    let allVideos = [
        // Example for adding custom videos to the list:
        /*
        {
            "name": "My video 1",
            "url": "https://example.com/Manifest.mpd",
            "keys": [
                {
                    "keyId": "1c817fed-0686-45b6-bce2-d6a4eb873588",
                }
            ]
        }
        */

        // Pre-generated demo videos with modifications:
        {
            "name": "Axinom demo video - single key (DASH; cenc)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-SingleKey/Encrypted_Cenc/Manifest.mpd",
            "keys": [
                {
                    "keyId": "211ac1dc-c8a2-4575-baf7-fa4ba56c38ac"
                }
            ]
        },
        {
            "name": "Axinom demo video - single key (HLS; cbcs)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-SingleKey/Encrypted_Cbcs/Manifest.m3u8",
            "keys": [
                {
                    "keyId": "211ac1dc-c8a2-4575-baf7-fa4ba56c38ac"
                }
            ],
            "tags": ["FairPlay"]
        },
        {
            "name": "Axinom demo video - multikey (DASH; cenc)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-MultiKey/Encrypted_Cenc/Manifest.mpd",
            "licenseToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmM2Q1ODhjNy1jMTdhLTQwMzMtOTAzNS04ZGIzMTczOTBiZTYiLCJ1c2FnZV9wb2xpY3kiOiJUaGVPbmVQb2xpY3kifSx7ImlkIjoiNDRiMThhMzItNmQzNi00OTlkLThiOTMtYTIwZjk0OGFjNWYyIiwidXNhZ2VfcG9saWN5IjoiVGhlT25lUG9saWN5In0seyJpZCI6ImFlNmU4N2UyLTNjM2MtNDZkMS04ZTlkLWVmNGM0NjFkNDY4MSIsInVzYWdlX3BvbGljeSI6IlRoZU9uZVBvbGljeSJ9XX0sImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJuYW1lIjoiVGhlT25lUG9saWN5IiwicGxheXJlYWR5Ijp7InBsYXlfZW5hYmxlcnMiOlsiNzg2NjI3RDgtQzJBNi00NEJFLThGODgtMDhBRTI1NUIwMUE3Il19fV19fQ.DpwBd1ax4Z7P0cCOZ7ZJMotqVWfLFCj2DYdH37xjGxM",
        },
        {
            "name": "Axinom demo video - multikey (HLS; cbcs)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-MultiKey/Encrypted_Cbcs/Manifest.m3u8",
            "licenseToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmM2Q1ODhjNy1jMTdhLTQwMzMtOTAzNS04ZGIzMTczOTBiZTYiLCJ1c2FnZV9wb2xpY3kiOiJUaGVPbmVQb2xpY3kifSx7ImlkIjoiNDRiMThhMzItNmQzNi00OTlkLThiOTMtYTIwZjk0OGFjNWYyIiwidXNhZ2VfcG9saWN5IjoiVGhlT25lUG9saWN5In0seyJpZCI6ImFlNmU4N2UyLTNjM2MtNDZkMS04ZTlkLWVmNGM0NjFkNDY4MSIsInVzYWdlX3BvbGljeSI6IlRoZU9uZVBvbGljeSJ9XX0sImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJuYW1lIjoiVGhlT25lUG9saWN5IiwicGxheXJlYWR5Ijp7InBsYXlfZW5hYmxlcnMiOlsiNzg2NjI3RDgtQzJBNi00NEJFLThGODgtMDhBRTI1NUIwMUE3Il19fV19fQ.DpwBd1ax4Z7P0cCOZ7ZJMotqVWfLFCj2DYdH37xjGxM",
            "tags": ["FairPlay"]
        }
    ];

    // Verifies that all critical information is present on a video.
    // Automatically performs sanity checks to avoid making mistakes in the above list. 
    function verifyVideoIntegrity(video) {
        if (!video)
            throw new Error("A video was expected but was not present.");
        if (!video.name || !video.name.length)
            throw new Error("A video is missing its name.");

        console.log("Verifying integrity of video definition: " + video.name);

        if (!video.url || !video.url.length)
            throw new Error("The video is missing its URL.");

        // Either a hardcoded license token or the keys structure must exist. Not both.
        if (video.licenseToken && video.keys)
            throw new Error("The video has both a hardcoded license token and a content key list - pick only one.");
        if (!video.licenseToken && !video.keys)
            throw new Error("The video is missing the content key list.");

        if (video.keys) {
            if (!video.keys.length)
                throw new Error("The content key list for this video is empty.");

            // Verify that each item in the keys list has all the required data.
            video.keys.forEach(function verifyKey(item) {
                if (!item.keyId)
                    throw new Error("A content key is missing the key ID.");
            });
        }
    }

    // Verify all videos on startup.
    allVideos.forEach(verifyVideoIntegrity);

    module.exports = {
        "getAllVideos": function getAllVideos() {
            return allVideos;
        },
        "getVideoByName": function getVideoByName(name) {
            for (let i = 0; i < allVideos.length; ++i) {
                let video = allVideos[i];
                if (video.name === name)
                    return video;
            }

            throw new Error("A video with name '" + name + "' was not found.");
        }
    };
}());
