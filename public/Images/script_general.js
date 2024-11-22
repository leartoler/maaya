(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scrollBarMargin":2,"id":"rootPlayer","start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player699","textToSpeechConfig":{"pitch":1,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false},"displayTooltipInTouchScreens":true},"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"children":["this.MainViewer"],"layout":"absolute","backgroundColorRatios":[0],"scripts":{"showWindow":TDV.Tour.Script.showWindow,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"clone":TDV.Tour.Script.clone,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"setValue":TDV.Tour.Script.setValue,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPixels":TDV.Tour.Script.getPixels,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizStart":TDV.Tour.Script.quizStart,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"existsKey":TDV.Tour.Script.existsKey,"quizFinish":TDV.Tour.Script.quizFinish,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"init":TDV.Tour.Script.init,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"registerKey":TDV.Tour.Script.registerKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"enableVR":TDV.Tour.Script.enableVR,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleVR":TDV.Tour.Script.toggleVR,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playAudioList":TDV.Tour.Script.playAudioList,"disableVR":TDV.Tour.Script.disableVR,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"mixObject":TDV.Tour.Script.mixObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getKey":TDV.Tour.Script.getKey,"createTween":TDV.Tour.Script.createTween,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"initQuiz":TDV.Tour.Script.initQuiz,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getComponentByName":TDV.Tour.Script.getComponentByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startMeasurement":TDV.Tour.Script.startMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale},"hash": "78e7a524e0b5baa331b3592cb3f78811559d80fb9335e6801a21730c6b2e779f", "definitions": [{"height":"100%","playbackBarProgressBorderSize":0,"progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"vrThumbstickRotationStep":20,"progressHeight":2,"playbackBarHeadShadowOpacity":0.7,"progressLeft":"33%","progressBorderSize":0,"subtitlesBottom":50,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"toolTipPaddingTop":4,"progressBarBorderRadius":2,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"playbackBarLeft":0,"progressBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","propagateClick":false,"progressRight":"33%","playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","progressOpacity":0.7,"playbackBarBorderSize":0,"playbackBarHeadBorderSize":0,"toolTipBorderColor":"#767676","subtitlesGap":0,"playbackBarHeadShadow":true,"id":"MainViewer","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"minHeight":50,"subtitlesTextShadowOpacity":1,"toolTipShadowColor":"#333138","minWidth":100,"progressBackgroundColor":["#000000"],"class":"ViewerArea","firstTransitionDuration":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":2,"width":"100%","subtitlesBorderColor":"#FFFFFF","playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","playbackBarHeadWidth":6,"subtitlesFontSize":"3vmin"},{"viewerArea":"this.MainViewer","class":"Model3DPlayer","id":"MainViewerModel3DPlayer"},{"items":[{"class":"Model3DPlayListItem","media":"this.model_5F6C40AE_55D4_B515_41A2_F780480F9089","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer"}],"class":"PlayList","id":"mainPlayList"},{"label":trans('model_5F6C40AE_55D4_B515_41A2_F780480F9089.label'),"objects":[],"lights":["this.light_5ED11240_55D4_B50C_41B4_66331B184A92"],"camera":"this.cam_5ED5923F_55D4_B574_41D4_ED424A2DC2E3","model":"this.res_5ED8323D_55D4_B574_41D0_FBA7A77D07C7","surfaceSelectionCoef":2,"floorRadius":219.74,"environmentIntensity":0.5,"id":"model_5F6C40AE_55D4_B515_41A2_F780480F9089","class":"Model3D","backgroundColor":"#333333","thumbnailUrl":"media/model_5F6C40AE_55D4_B515_41A2_F780480F9089_t.jpg","animations":["this.anim_5F20D229_55D4_B51C_41D2_80C1376EDE0D","this.anim_5F20C229_55D4_B51C_41C0_4F25A232BC2B","this.anim_5F203229_55D4_B51C_41D4_9EF3134D4E51","this.anim_5F20222A_55D4_B51C_41CA_C0DBA6C23A44","this.anim_5F20722A_55D4_B51C_41D2_5A567D99A091","this.anim_5F20622A_55D4_B51C_41CD_BB32FEF1FF40","this.anim_5F20522A_55D4_B51C_41C0_EDDACE3B7000","this.anim_5F20422A_55D4_B51C_41CD_0E68F5E106A1","this.anim_5F21B22A_55D4_B51C_41C2_EE091CE44D5D","this.anim_5F21A22A_55D4_B51C_41AB_F7863EA2D98E","this.anim_5F21922A_55D4_B51C_41B8_E292A782225C","this.anim_5F21822A_55D4_B51C_41D4_B8DCA72C66DE","this.anim_5F21F22A_55D4_B51C_41CD_3BB7DB7FCFAD","this.anim_5F21E22A_55D4_B51C_41D0_A780D1E2B143","this.anim_5F21D22A_55D4_B51C_41D4_B8D5D213C6D1","this.anim_5F21C22A_55D4_B51C_4198_05F676284D6D","this.anim_5F21222A_55D4_B51C_41B6_0A8912D22D8A","this.anim_5F21122A_55D4_B51C_418E_829ED024447C","this.anim_5F21722A_55D4_B51C_41C5_6DBCBC9CC877","this.anim_5F21622A_55D4_B51C_41D3_0B79EF939065","this.anim_5F21522A_55D4_B51C_41B3_8D5C1E8D4491","this.anim_5F21422A_55D4_B51C_41B2_87BADFC21136","this.anim_5EDEA22A_55D4_B51C_41BF_413DB5C413EC","this.anim_5EDE922A_55D4_B51C_41C9_26EBAC7332CB","this.anim_5EDE822A_55D4_B51C_41C5_E6F2C2C149C4","this.anim_5EDEF22A_55D4_B51C_41BA_CD939B2D9233","this.anim_5EDEE22A_55D4_B51C_41A0_589002D64C8D","this.anim_5EDED22A_55D4_B51C_4198_AD647ACBE1E1","this.anim_5F21A22A_55D4_B51D_41B4_EF2ECC459007","this.anim_5F21922A_55D4_B51D_41C4_6A4B48A1080D","this.anim_5F21822A_55D4_B51D_41A5_633F558C8EA5","this.anim_5F21F22A_55D4_B51D_41A6_F5A3BE56CF10","this.anim_5F21E22A_55D4_B51D_41A3_E5DEA3CE1E5B","this.anim_5F21D22A_55D4_B51D_41BD_F9807E611A09","this.anim_5F21322A_55D4_B51D_41D2_9F3E19226A15","this.anim_5F21222A_55D4_B51D_41C8_42BCE7089773","this.anim_5F21122A_55D4_B51D_41C2_48E46736B8DA","this.anim_5F21022A_55D4_B51D_41BA_CC2239A09C98","this.anim_5F21722A_55D4_B51D_41C0_7A504D5C9D3D","this.anim_5F21522A_55D4_B51D_41D4_A08376864381","this.anim_5F21422A_55D4_B51D_41B7_2BAD038788B0","this.anim_5EDEB22A_55D4_B51D_41A3_4F68F49F18E5","this.anim_5EDEA22A_55D4_B51D_41D5_281165A3D15A"],"surfaceReticleMinRadius":15,"surfaceReticleRadius":0.02,"surfaceReticleMaxRadius":50,"environmentURL":"media/model_5F6C40AE_55D4_B515_41A2_F780480F9089/bg_5ECC7240_55D4_B50C_41B8_A4093218FCFC.jpg","data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"ICHKABAL_Prueba"}},{"intensity":0.5,"class":"AmbientLight","id":"light_5ED11240_55D4_B50C_41B4_66331B184A92"},{"initialY":5.37,"minZ":-327.79,"maxZ":330.52,"autoNearFar":true,"minY":-71.89,"maxX":321.51,"initialX":-8.09,"id":"cam_5ED5923F_55D4_B574_41D4_ED424A2DC2E3","minX":-337.7,"initialZ":1.36,"class":"FirstPersonModel3DCamera","maxY":209.89,"initialPitch":-30,"vrEnabled":true},{"class":"Model3DResource","id":"res_5ED8323D_55D4_B574_41D0_FBA7A77D07C7","levels":[{"url":"media/model_5F6C40AE_55D4_B515_41A2_F780480F9089/scene.glb","class":"Model3DResourceLevel"},{"url":"media/model_5F6C40AE_55D4_B515_41A2_F780480F9089/scene_mobile.glb","tags":"mobile","class":"Model3DResourceLevel"}]},{"class":"Model3DAnimation","name":"TweeAction","index":0,"id":"anim_5F20D229_55D4_B51C_41D2_80C1376EDE0D"},{"class":"Model3DAnimation","name":"Baum_krumm_1.002Action","id":"anim_5F20C229_55D4_B51C_41C0_4F25A232BC2B"},{"class":"Model3DAnimation","name":"Circle.003Action","id":"anim_5F203229_55D4_B51C_41D4_9EF3134D4E51"},{"class":"Model3DAnimation","name":"Cube.026Action","id":"anim_5F20222A_55D4_B51C_41CA_C0DBA6C23A44"},{"class":"Model3DAnimation","name":"Cube.027Action","id":"anim_5F20722A_55D4_B51C_41D2_5A567D99A091"},{"class":"Model3DAnimation","name":"Cube.030Action","id":"anim_5F20622A_55D4_B51C_41CD_BB32FEF1FF40"},{"class":"Model3DAnimation","name":"Cube.030Action.001","id":"anim_5F20522A_55D4_B51C_41C0_EDDACE3B7000"},{"class":"Model3DAnimation","name":"Cube.031Action","id":"anim_5F20422A_55D4_B51C_41CD_0E68F5E106A1"},{"class":"Model3DAnimation","name":"Cube.029Action","id":"anim_5F21B22A_55D4_B51C_41C2_EE091CE44D5D"},{"class":"Model3DAnimation","name":"Cube.058Action","id":"anim_5F21A22A_55D4_B51C_41AB_F7863EA2D98E"},{"class":"Model3DAnimation","name":"Cube.058Action.001","id":"anim_5F21922A_55D4_B51C_41B8_E292A782225C"},{"class":"Model3DAnimation","name":"Cube.036Action","id":"anim_5F21822A_55D4_B51C_41D4_B8DCA72C66DE"},{"class":"Model3DAnimation","name":"Cube.037Action","id":"anim_5F21F22A_55D4_B51C_41CD_3BB7DB7FCFAD"},{"class":"Model3DAnimation","name":"Cube.039Action","id":"anim_5F21E22A_55D4_B51C_41D0_A780D1E2B143"},{"class":"Model3DAnimation","name":"Cube.040Action","id":"anim_5F21D22A_55D4_B51C_41D4_B8D5D213C6D1"},{"class":"Model3DAnimation","name":"Cube.041Action","id":"anim_5F21C22A_55D4_B51C_4198_05F676284D6D"},{"class":"Model3DAnimation","name":"Cube.042Action","id":"anim_5F21222A_55D4_B51C_41B6_0A8912D22D8A"},{"class":"Model3DAnimation","name":"Cube.044Action","id":"anim_5F21122A_55D4_B51C_418E_829ED024447C"},{"class":"Model3DAnimation","name":"Cube.045Action","id":"anim_5F21722A_55D4_B51C_41C5_6DBCBC9CC877"},{"class":"Model3DAnimation","name":"Cube.047Action","id":"anim_5F21622A_55D4_B51C_41D3_0B79EF939065"},{"class":"Model3DAnimation","name":"Cube.025Action","id":"anim_5F21522A_55D4_B51C_41B3_8D5C1E8D4491"},{"class":"Model3DAnimation","name":"Cube.028Action","id":"anim_5F21422A_55D4_B51C_41B2_87BADFC21136"},{"class":"Model3DAnimation","name":"Cube.058Action.002","index":1,"id":"anim_5EDEA22A_55D4_B51C_41BF_413DB5C413EC"},{"class":"Model3DAnimation","name":"Cube.035Action","id":"anim_5EDE922A_55D4_B51C_41C9_26EBAC7332CB"},{"class":"Model3DAnimation","name":"Cube.038Action","id":"anim_5EDE822A_55D4_B51C_41C5_E6F2C2C149C4"},{"class":"Model3DAnimation","name":"Cube.043Action","id":"anim_5EDEF22A_55D4_B51C_41BA_CD939B2D9233"},{"class":"Model3DAnimation","name":"Cube.046Action","id":"anim_5EDEE22A_55D4_B51C_41A0_589002D64C8D"},{"class":"Model3DAnimation","name":"Cube.048Action","id":"anim_5EDED22A_55D4_B51C_4198_AD647ACBE1E1"},{"class":"Model3DAnimation","name":"Cube.048Action.001","id":"anim_5F21A22A_55D4_B51D_41B4_EF2ECC459007"},{"class":"Model3DAnimation","name":"Cube.048Action.002","id":"anim_5F21922A_55D4_B51D_41C4_6A4B48A1080D"},{"class":"Model3DAnimation","name":"Cube.051Action","id":"anim_5F21822A_55D4_B51D_41A5_633F558C8EA5"},{"class":"Model3DAnimation","name":"Cube.051Action.001","id":"anim_5F21F22A_55D4_B51D_41A6_F5A3BE56CF10"},{"class":"Model3DAnimation","name":"Cube.051Action.002","id":"anim_5F21E22A_55D4_B51D_41A3_E5DEA3CE1E5B"},{"class":"Model3DAnimation","name":"Cube.051Action.003","id":"anim_5F21D22A_55D4_B51D_41BD_F9807E611A09"},{"class":"Model3DAnimation","name":"Cube.051Action.004","id":"anim_5F21322A_55D4_B51D_41D2_9F3E19226A15"},{"class":"Model3DAnimation","name":"Cube.051Action.005","id":"anim_5F21222A_55D4_B51D_41C8_42BCE7089773"},{"class":"Model3DAnimation","name":"Cube.051Action.006","id":"anim_5F21122A_55D4_B51D_41C2_48E46736B8DA"},{"class":"Model3DAnimation","name":"Cube.032Action","id":"anim_5F21022A_55D4_B51D_41BA_CC2239A09C98"},{"class":"Model3DAnimation","name":"Cube.033Action","id":"anim_5F21722A_55D4_B51D_41C0_7A504D5C9D3D"},{"class":"Model3DAnimation","name":"LandscapeAction","index":2,"id":"anim_5F21522A_55D4_B51D_41D4_A08376864381"},{"class":"Model3DAnimation","name":"birdsAction","id":"anim_5F21422A_55D4_B51D_41B7_2BAD038788B0"},{"class":"Model3DAnimation","name":"birdsAction.001","id":"anim_5EDEB22A_55D4_B51D_41A3_4F68F49F18E5"},{"class":"Model3DAnimation","name":"Cube.070Action","id":"anim_5EDEA22A_55D4_B51D_41D5_281165A3D15A"}],"minHeight":0,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","height":"100%","gap":10,"propagateClick":false,"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Fri Nov 22 2024