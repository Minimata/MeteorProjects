/**
 * Created by alexandre on 03.02.2017.
 */

import { Config } from 'angular-ecmascript/module-helpers';

import chatsTemplateUrl from '../templates/chats.html'
import tabsTemplateUrl from '../templates/tabs.html'

export default class RoutesConfig extends Config {
    configure() {
        this.$stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: tabsTemplateUrl
            })
            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: chatsTemplateUrl,
                        controller: 'ChatsUrl as chats'
                    }
                }
            });

        this.$urlRouterProvider.otherwise('tabs/chats');
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];