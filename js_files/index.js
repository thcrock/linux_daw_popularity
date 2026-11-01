import versions from './versions.json' with { type: 'json' };
import prices from './prices.json' with { type: 'json' };
import crc32 from 'crc/crc32'
import { App } from '../App.class.js'

import daw from './daw.js'
import foss from './foss.js'
import misc from './misc.js'
import tools from './tools.js'
import tracker from './tracker.js'

import ablaze from './ablaze.js'
import acmt from './acmt.js'
import acondigital from './acondigital.js'
import airg from './airg.js'
import anclark from './anclark.js'
import apisonicaudio from './apisonicaudio.js'
import apmastering from './apmastering.js'
import apu from './apu.js'
import apulsoft from './apulsoft.js'
import arborealaudio from './arborealaudio.js'
import asap from './asap.js'
import atkaudio from './atkaudio.js'
import auburn from './auburn.js'
import audioassault from './audioassault.js'
import audioblast from './audioblast.js'
import audiodamage from './audiodamage.js'
import audiosingularity from './audiosingularity.js'
import audiothing from './audiothing.js'
import audyoengineering from './audyoengineering.js'
import auroradsp from './auroradsp.js'
import bertomaudio from './bertomaudio.js'
import bigmanlabs from './bigmanlabs.js'
import bitsonic from './bitsonic.js'
import bomshankamachines from './bomshankamachines.js'
import bram from './bram.js'
import brucejames from './brucejames.js'
import calfstudiogear from './calfstudiogear.js'
import chair from './chair.js'
import chowdsp from './chowdsp.js'
import crql from './crql.js'
import cutthroughrecordings from './cutthroughrecordings.js'
import darkpalace from './darkpalace.js'
import ddmf from './ddmf.js'
import discodsp from './discodsp.js'
import dsgdnb from './dsgdnb.js'
import duskaudio from './duskaudio.js'
import fors from './fors.js'
import frctlaudio from './frctlaudio.js'
import fxmechanics from './fxmechanics.js'
import tdr from './tdr.js'
import tweakbench from './tweakbench.js'
import usualsuspects from './usualsuspects.js'
import guitarml from './guitarml.js'
import gvst from './gvst.js'
// "Harrison is no longer developing plug-ins for the Linux platform."
// import harrison from './harrison.js'
import hyplugins from './hyplugins.js'
import inertia from './inertia.js'
import iem from './iem.js'
import igorski from './igorski.js'
import inphonik from './inphonik.js'
import insertaudio from './insertaudio.js'
import isorek from './isorek.js'
import joachip from './joachip.js'
import kazrog from './kazrog.js'
import korneffaudio from './korneffaudio.js'
import kreuzbergaudio from './kreuzbergaudio.js'
import leitaudio from './leitaudio.js'
// Audiojunkie (Sean Ercanbrack) mentioned on Mastodon (see: https://mastodon.online/@ercanbrack/116777611072387838)
// that Loomer is no more which is why I propose to remove it.
// import loomer from './loomer.js'
import lsp from './lsp.js'
import mainstaudiolabs from './mainstaudiolabs.js'
import maniacaudio from './maniacaudio.js'
import manifestaudio from './manifestaudio.js'
import mannixsquared from './mannixsquared.js'
import martillolaud from './martillolaud.js'
import mmediaaudio from './mmediaaudio.js'
import mouseplugins from './mouseplugins.js'
import mtyasplugins from './mtyasplugins.js'
import nakst from './nakst.js'
import nathanielwing from './nathanielwing.js'
import nclear from './nclear.js'
import nebulaaudio from './nebulaaudio.js'
import oddduckaudio from './oddduckaudio.js'
import ohlhorstdigital from './ohlhorstdigital.js'
// OTODESK releases Windows-only VST3 builds, so it is not a Linux plugin source
// import otodesk from './otodesk.js'
import paaaudio from './paaaudio.js'
import plogue from './plogue.js'
// Skipping noirsonance for now as a user said they have no linux support
// import noirsonance from './noirsonance.js'
import polarity from './polarity.js'
import punklabs from './punklabs.js'
import ravetracer from './ravetracer.js'
import riverfluxaudio from './riverfluxaudio.js'
import ruinunocapela from './ruinunocapela.js'
import shyaudio from './shyaudio.js'
import sinevibes from './sinevibes.js'
import sinuslabs from './sinuslabs.js'
import smaolab from './smaolab.js'
import socalabs from './socalabs.js'
import stillwellaudio from './stillwellaudio.js'
import stomptones from './stomptones.js'
import studio9plugins from './studio9plugins.js'
import superflydsp from './superflydsp.js'
import surge from './surge.js'
import tal from './tal.js'
import thehim from './thehim.js'
import toneboosters from './toneboosters.js'
import tiagolr from './tiagolr.js'
import tonelib from './tonelib.js'
import tracktion from './tracktion.js'
import uhe from './u-he.js'
import unplugred from './unplug-red.js'
import uryanaudio from './uryanaudio.js'
import venomode from './venomode.js'
import vztec from './vztec.js'
import warmth from './warmth.js'
import wastedaudio from './wastedaudio.js'
import wetvst from './wetvst.js'
import whiteelephantaudio from './white-elephant-audio.js'
import x42 from './x42.js'
import xeniaudio from './xeniaudio.js'
import yimrakhee from './yimrakhee.js'
import yggaudio from './yggaudio.js'

// Used for crawling
export const developers = [
    acmt.developer,
    auburn.developer,
    audiothing.developer,
    bomshankamachines.developer,
    cutthroughrecordings.developer,
    discodsp.developer,
    // harrison.developer,
    lsp.developer,
    tal.developer,
    uhe.developer,
    wastedaudio.developer,
    x42.developer,
].map(dev => {
    return {
        id: crc32(dev.name).toString(16),
        ...dev,
    }
});

// Used for trimming images
export const trimImages = {
    [apisonicaudio.developer.name]: apisonicaudio.developer.trimImages,
    [audioassault.developer.name]: audioassault.developer.trimImages,
    [audioblast.developer.name]: audioblast.developer.trimImages,
    [audiodamage.developer.name]: audiodamage.developer.trimImages,
    [bertomaudio.developer.name]: bertomaudio.developer.trimImages,
    [chair.developer.name]: chair.developer.trimImages,
    // [harrison.developer.name]: harrison.developer.trimImages,
    [hyplugins.developer.name]: hyplugins.developer.trimImages,
    [socalabs.developer.name]: socalabs.developer.trimImages,
    [wastedaudio.developer.name]: wastedaudio.developer.trimImages,
}

let db = [
    // Advanced format
    ...ablaze.apps,
    ...acmt.apps,
    ...acondigital.apps,
    ...airg.apps,
    ...anclark.apps,
    ...apisonicaudio.apps,
    ...apmastering.apps,
    ...arborealaudio.apps,
    ...apu.apps,
    ...apulsoft.apps,
    ...asap.apps,
    ...auburn.apps,
    ...audioassault.apps,
    ...audioblast.apps,
    ...audiodamage.apps,
    ...audiothing.apps,
    ...audyoengineering.apps,
    ...audiosingularity.apps,
    ...auroradsp.apps,
    ...atkaudio.apps,
    ...bertomaudio.apps,
    ...bigmanlabs.apps,
    ...bitsonic.apps,
    ...bomshankamachines.apps,
    ...bram.apps,
    ...brucejames.apps,
    ...chair.apps,
    ...crql.apps,
    ...cutthroughrecordings.apps,
    ...darkpalace.apps,
    ...ddmf.apps,
    ...discodsp.apps,
    ...dsgdnb.apps,
    ...duskaudio.apps,
    ...fors.apps,
    ...frctlaudio.apps,
    ...fxmechanics.apps,
    // ...harrison.apps,
    ...hyplugins.apps,
    ...iem.apps,
    ...igorski.apps,
    ...insertaudio.apps,
    ...isorek.apps,
    ...joachip.apps,
    ...kazrog.apps,
    ...korneffaudio.apps,
    ...kreuzbergaudio.apps,
    ...leitaudio.apps,
    // ...loomer.apps,
    ...lsp.apps,
    ...mainstaudiolabs.apps,
    ...maniacaudio.apps,
    ...manifestaudio.apps,
    ...mannixsquared.apps,
    ...martillolaud.apps,
    ...mmediaaudio.apps,
    ...mouseplugins.apps,
    ...mtyasplugins.apps,
    ...nathanielwing.apps,
    ...nclear.apps,
    ...nebulaaudio.apps,
    ...oddduckaudio.apps,
    ...ohlhorstdigital.apps,
    // OTODESK releases Windows-only VST3 builds, so it is not a Linux plugin source
    // ...otodesk.apps,
    ...paaaudio.apps,
    ...plogue.apps,
    ...polarity.apps,
    // ...noirsonance.apps,
    ...ravetracer.apps,
    ...riverfluxaudio.apps,
    ...ruinunocapela.apps,
    ...shyaudio.apps,
    ...sinevibes.apps,
    ...socalabs.apps,
    ...stillwellaudio.apps,
    ...stomptones.apps,
    ...studio9plugins.apps,
    ...tal.apps,
    ...tdr.apps,
    ...thehim.apps,
    ...toneboosters.apps,
    ...tweakbench.apps,
    ...uhe.apps,
    ...unplugred.apps,
    ...uryanaudio.apps,
    ...usualsuspects.apps,
    ...vztec.apps,
    ...warmth.apps,
    ...wastedaudio.apps,
    ...wetvst.apps,
    ...x42.apps,
    ...xeniaudio.apps,
    ...yimrakhee.apps,
    ...yggaudio.apps,

    // Simple format
    ...calfstudiogear,
    ...chowdsp,
    ...daw,
    ...foss,
    ...guitarml,
    ...gvst,
    ...inertia,
    ...inphonik,
    ...misc,
    ...nakst,
    ...punklabs,
    ...sinuslabs,
    ...smaolab,
    ...superflydsp,
    ...surge,
    ...tiagolr,
    ...tonelib,
    ...tools,
    ...tracker,
    ...tracktion,
    ...venomode,
    ...whiteelephantaudio,
]

export const apps = db.map(app => new App(app))
