angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/home.html","<ion-side-menus>\n  <ion-side-menu-content >\n    <ion-nav-bar class=\"bar-header bar-dark\">\n      <button menu-toggle=\"left\" class=\"button button-icon ion-navicon\"></button>\n    </ion-nav-bar>\n    <ion-nav-view></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n  <header class=\"bar bar-header bar-positive\">\n    <h1 class=\"title\">Unacademic</h1>\n  </header>\n  <ion-content class=\"has-header\">\n    <ion-list>\n      <ion-item nav-clear menu-close ui-sref=\"app.news\">News</ion-item>\n      <ion-item nav-clear menu-close ui-sref=\"app.myProfile\">Profile</ion-item>\n      <ion-item nav-clear menu-close ui-sref=\"app.objectives.user\">Objectives</ion-item>\n      <ion-item nav-clear menu-close ui-sref=\"app.users\">Users</ion-item>\n    </ion-list>\n  </ion-content >\n  </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("app/cards/card-header.html","<section class=\"card-header\">\n  <div class=\"item item-divider item-dark\">\n    <h1 ng-class=\"color\">{{ title }}</h1>\n  </div>\n\n  <div class=\"item\">\n    <img class=\"objective-logo padding-horizontal full-image\" ng-src=\"{{logo}}\"></img>\n  </div>\n</section>\n");
$templateCache.put("app/cards/card-section.html","<section class=\"card-section\">\n    <div ng-class=\"headerColor(open)\"\n         class=\"item item-divider item-icon-right\"\n         ng-click=\"open = !open\">\n      <i ng-show=\"!open\" class=\"icon ion-ios7-plus\" ng-class=\"color\"></i>\n      <i ng-show=\"open\" class=\"icon ion-ios7-minus light\"></i>\n      {{title}}\n    </div>\n    <section ng-show=\"open\">\n      <div class=\"ng-transclude\"></div>\n    </section>\n</section>\n");
$templateCache.put("app/authentication/views/signin.html","<ion-view title=\"Login\" >\n  <ion-content class=\"login\">\n  <svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 424 244\" enable-background=\"new 0 0 424 244\" xml:space=\"preserve\">\n    <g>\n    <g>\n    <path d=\"M84.6 44.143c-4.02 0-6.3 2.1-6.3 7.44s2.28 7.4 6.3 7.44c4.02 0 6.299-2.1 6.299-7.44 S88.619 44.1 84.6 44.143z\" class=\"logo\"/>\n    <path d=\"M222.238 50.803c0 4 1.7 6.7 5.8 6.66c2.46 0 4.08-0.96 5.22-1.98v-9.36 c-1.14-1.02-2.76-1.98-5.22-1.98C223.917 44.1 222.2 46.8 222.2 50.803z\" class=\"style0\"/>\n    <path d=\"M114.239 51.583c0 4.5 1.6 7.3 5.6 7.32c2.46 0 4.32-1.02 5.34-1.98v-10.68 c-1.02-0.96-2.88-1.98-5.34-1.98C115.799 44.3 114.2 47.1 114.2 51.583z\" class=\"style0\"/>\n    <path d=\"M18 18v65h282V18H18z M152.278 25.664h9.48v8.28h-9.48V25.664z M49.02 58.483c4.2 0 5.879-2.04 6.18-6.72 h8.52c-0.6 9.06-5.28 13.859-14.759 13.859c-11.22 0-15.6-6.72-15.6-17.699c0-11.16 4.5-18.299 16.02-18.299 c9.359 0 13.9 4.7 14.3 13.919H55.2c-0.3-4.68-2.16-6.78-6.3-6.78c-5.82 0-6.96 4.14-6.96 10.859S43.08 58.5 49 58.483z M84.419 65.623c-7.02 0-14.459-3.18-14.459-13.919c0-10.979 7.8-14.1 14.819-14.1c7.08 0 14.5 3.2 14.5 13.9 C99.239 62.4 91.4 65.6 84.4 65.623z M133.258 65.022h-7.14v-3.6c-1.32 1.92-4.38 4.2-8.939 4.2 c-6.24 0-11.28-4.32-11.28-13.979c0-10.02 5.46-14.04 11.28-14.04c4.379 0 7 2.3 8 3.48V25.664h8.04V65.022z M169.258 65.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V65.022z M205.197 65.022h-8.04V49.843 c0-3.78-0.96-5.52-4.2-5.52c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04V38.204h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2 c4.8 0 9.4 2.5 9.4 10.8V65.022z M241.257 65.442c0 7.62-4.979 11.28-13.919 11.28c-5.64 0-12.54-1.44-12.839-10.62h7.68 c0.24 2.5 1.2 4.8 5.6 4.8c4.92 0 5.46-2.88 5.46-6.12v-4.14c-1.32 1.5-3.6 3.36-7.8 3.36c-6.419 0-11.52-4.32-11.52-13.08 c0-8.819 5.22-13.319 11.58-13.319c4.32 0 7.4 2.1 8.6 4.02v-3.42h7.14V65.442z M281.276 71.982h-33.359v-6.959h33.359V71.982z\" class=\"style0\"/>\n    </g>\n    <g>\n    <path d=\"M120.599 115.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C125.938 116.7 123.3 115.7 120.6 115.664z\" class=\"style0\"/>\n    <path d=\"M18 90v65h174V90H18z M62.699 116.263H49.44v8.58c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56 v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V116.263z M97.199 137.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52c-2.64 0-4.26 1.2-4.92 1.92v18.779H72V97.664h8.04v15.479 c1.14-1.38 3.3-3.54 7.919-3.54c4.92 0 9.2 2.5 9.2 10.8V137.022z M135.058 124.963h-20.759c0 3.8 1.9 6.6 6.8 6.6 c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16 c7.439 0 14.2 3.5 14.2 13.979V124.963z M173.278 143.982h-33.359v-6.959h33.359V143.982z\" class=\"style0\"/>\n    </g>\n    <g>\n    <path d=\"M336.596 187.664c-2.7 0-5.339 1.02-6.18 4.439h12.36C341.936 188.7 339.3 187.7 336.6 187.664z\" class=\"style0\"/>\n    <path d=\"M150.239 201.643c0 1.7 1.4 2.5 3.8 2.46c3.24 0 5.82-1.26 6.66-1.98v-2.76 c-0.84-0.18-3.3-0.36-5.22-0.36C152.458 199 150.2 199.5 150.2 201.643z\" class=\"style0\"/>\n    <path d=\"M18 162v65h388v-65H18z M296.276 169.664h9.48v8.28h-9.48V169.664z M224.277 169.664h9.48v8.28h-9.48 V169.664z M61.199 209.022H52.86v-14.219h-8.52v14.219H36v-34.739h8.339v13.56h8.52v-13.56h8.339V209.022z M97.199 209.022h-7.14 v-3.6c-1.32 1.98-4.08 4.2-8.64 4.2c-4.8 0-9.419-2.46-9.419-10.8v-16.619h8.04v15.179c0 3.8 1 5.5 4.2 5.5 c2.16 0 3.72-0.72 4.92-1.92v-18.779h8.04V209.022z M135.958 209.022h-6.899v-17.519c0-2.4-0.42-3.72-1.98-3.72 c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.839v-17.519c0-2.4-0.42-3.72-1.98-3.72c-1.5 0-2.7 1.32-3.06 1.92v19.319h-6.9v-26.819h6 v3.66c0.84-1.5 2.82-4.26 6.72-4.26c3.18 0 4.9 1.9 5.5 3.9c0.48-0.78 2.4-3.9 6.479-3.9c4.86 0 6.1 4.4 6.1 9.06V209.022z M172.258 208.422c-1.2 0.6-3.48 1.2-5.58 1.2c-3.54 0-4.68-1.68-4.68-3.84v-0.54c-1.38 1.74-4.38 4.38-10.08 4.4 c-5.28 0-9.719-2.34-9.719-7.74c0-6.12 5.64-7.86 11.459-7.86c3.06 0 5.8 0.5 7.1 0.84v-2.04c0-2.88-0.66-5.04-4.98-5.04 c-3.06 0-5.16 1.08-5.16 3.84h-7.5c0-7.08 5.64-10.02 13.139-10.02c6.9 0 12.5 2.5 12.5 10.56v10.02 c0 1 0.4 1.4 1.4 1.38c0.66 0 1.62-0.18 2.1-0.3V208.422z M205.197 209.022h-8.04v-15.179c0-3.78-0.96-5.52-4.2-5.52 c-2.16 0-3.72 0.72-4.92 1.92v18.779h-8.04v-26.819h7.14v3.6c1.32-1.979 4.08-4.2 8.64-4.2c4.8 0 9.4 2.5 9.4 10.8V209.022z M241.257 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759h8.22V209.022z M278.696 188.263h-13.259v8.58 c0 4.3 0.8 6.1 4.9 6.12c2.76 0 5.34-0.84 7.14-1.56v6.3c-1.98 0.9-5.1 1.92-9.18 1.92c-7.08 0-10.859-3.12-10.859-12.479 v-8.88h-8.34v-6.06h8.34v-12.54h8.04v12.54h13.259V188.263z M313.256 209.022h-25.319v-6.06h9.06v-14.7h-9.06v-6.06h17.099v20.759 h8.22V209.022z M351.055 196.963h-20.759c0 3.8 1.9 6.6 6.8 6.6c3 0 5.22-1.02 5.58-2.94h8.28c-1.44 6.72-7.44 9-13.919 9 c-8.34 0-14.879-3.78-14.879-13.859c0-10.8 7.5-14.16 14.699-14.16c7.439 0 14.2 3.5 14.2 13.979V196.963z M372.235 209.6 c-7.68-0.06-13.919-2.16-14.099-9h8.219c0.24 2.6 2.9 3.3 6.5 3.3c3.12 0 5.88-0.54 5.88-2.46c0-2.22-3.9-2.4-9.18-3.24 c-5.16-0.84-10.86-2.16-10.86-8.16c0-5.939 5.64-8.459 13.68-8.459c7.02 0 12.7 1.9 13.1 8.52h-8.22 c-0.36-2.28-3-2.82-5.64-2.82c-2.82 0-4.68 0.6-4.68 2.16c0 1.9 2.9 2.2 9.2 3.06c5.28 0.7 10.9 2.2 10.9 8.3 C387.055 207.5 380.3 209.7 372.2 209.623z\" class=\"style0\"/>\n    </g>\n    </g>\n  </svg>\n\n\n  </ion-content>\n</ion-view>\n<button class=\"bar bar-footer button-full bar-dark\" ng-click=\"vm.signIn()\">\n  <i class=\"icon ion-social-github\"></i> Sign In\n</button>\n");
$templateCache.put("app/news/views/news.html","<ion-view title=\"News\">\n  <ion-content class=\"padding-horizontal\">\n    <section class=\"profile list card\" ng-repeat=\"message in [1,2,3]\">\n      <ion-item class=\"item-divider item-dark\">\n        News Flash\n      </ion-item>\n        <ion-item class=\"item-text-wrap\">\n          You can also use relative state paths within ui-sref, just like the \n          relative paths passed to state.go(). You just need to be aware that \n          the path is relative to the state that the link lives in, in other \n          words the state that loaded the template containing the link.\n        </ion-item>\n    </section>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/objectives/views/add-objective.html","<ion-view title=\"Add Objective\" hide-nav-bar=\"true\">\n  <div class=\"bar bar-header item-input-inset\">\n    <label class=\"item-input-wrapper\">\n      <input type=\"text\" placeholder=\"search\">\n    </label>\n    <button class=\"button button-small\">\n      Submit\n    </button>\n  </div>\n  <ion-content has-header=\"true\">\n    <div class=\"list\">\n      <div class=\"item\" ng-repeat=\"(key, value) in objectives.all\">\n        {{value.title}}\n      </div>\n    </div>\n    <a ui-sref=\"app.objectives.edit\" class=\"button button-block button-assertive\">Done</a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/objectives/views/edit-objectives.html","<ion-view title=\"Objectives\">\n  <ion-content class=\"padding-horizontal\">\n\n    <section ng-show=\"objectives.all\" class=\"profile list card\" ng-repeat=\"(key, value) in objectives.all | groupBy: \'level\'\">\n\n      <section class=\"level\">\n        <ion-item class=\"item-divider item-dark\">\n        Level {{ key }}\n        </ion-item>\n        <ion-item class=\"item-icon-right\" ng-repeat=\"objective in value\">\n          {{ objective.title }}\n        </div>\n        <div ng-hide=\"objective.added\" ng-click=\"objectives.add(objective.id)\">\n          <i class=\"icon ion-ios7-plus\" ng-class=\"objective.color\"></i>\n        </div>\n        <div ng-show=\"objective.added\" ng-click=\"objectives.remove(objective.id)\">\n          <i class=\"icon ion-ios7-minus\" ng-class=\"objective.color\"></i>\n        </ion-item>\n      </section>\n    </section>\n    <a ui-sref=\"app.objectives.add\" class=\"button button-block button-dark\">Add New</a>\n    <a ui-sref=\"app.objectives.user\" class=\"button button-block button-assertive\">Done</a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/objectives/views/edit-user-objectives.html","<ion-view title=\"Objectives\">\n  <ion-content class=\"padding-horizontal\">\n\n    <section class=\"profile list card\" \n             ng-repeat=\"(key, value) in objectives.all | groupBy: \'level\'\">\n\n      <section class=\"level\">\n        <ion-item class=\"item-divider item-dark\">\n        Level {{ key }}\n        </ion-item>\n        <ion-item class=\"item-icon-right\" ng-repeat=\"objective in value\">\n          {{ objective.title }}\n        </div>\n        <div ng-hide=\"objective.added\" ng-click=\"objectives.add(objective.id)\">\n          <i class=\"icon ion-ios7-plus\" ng-class=\"objective.color\"></i>\n        </div>\n        <div ng-show=\"objective.added\" ng-click=\"objectives.remove(objective.id)\">\n          <i class=\"icon ion-ios7-minus\" ng-class=\"objective.color\"></i>\n        </ion-item>\n      </section>\n    </section>\n    <a ng-click=\"objectives.showOptions()\" class=\"button button-block button-positive\">Curate</a>\n    <a ui-sref=\"app.objectives.user\" class=\"button button-block button-assertive\">Done</a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/objectives/views/objectives-detail.html","<ion-view class=\"hide-tabs\" title=\"{{objective.title}}\">\n\n  <ion-content>\n    <div class=\"list card\">\n\n      <card-header title=\"{{objective.title}}\"\n                   color=\"light\"\n                   logo=\"{{objective.url}}\">\n      </card-header>\n\n      <card-section title=\"Overview\" color=\"{{objective.color}}\">\n        <div class=\"item item-text-wrap\">\n          <h2>Level: {{ objective.level }}</h2>\n          <progress value={{objective.completion()}}\n            ng-class=\"{{objective.color}}\" max=100>\n          </progress>\n          <p>{{ objective.description.summary }}</p>\n        </div>\n        </card-section>\n\n      <card-section title=\"Description\" color=\"{{objective.color}}\">\n        <div class=\"item item-text-wrap\">\n          <p>{{objective.description.full }}</p>\n        </div>\n      </card-section>\n\n      <card-section title=\"Tasks\" color=\"{{objective.color}}\">\n        <task-list color=\"{{objective.color}}\" tasks=\"objective.tasks\"></task-list>\n      </card-section>\n\n    </div>\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("app/objectives/views/objectives.html","<ion-view title=\"Objectives\">\n  <ion-nav-view></ion-nav-view>\n</ion-view>\n");
$templateCache.put("app/objectives/views/user-objectives.html","<ion-view title=\"My Objectives\">\n  <ion-content class=\"padding-horizontal\">\n\n    <button ng-hide=\"objectives.all\" id=\"sign-in\" class=\"button button-block button-assertive\" ng-click=\"objectives.signIn()\">\n      <i class=\"ion-social-github\"> </i>Sign In\n    </button>\n\n    <section ng-hide=\"objectives.empty()\" class=\"profile\">\n      <section class=\"list card level\" ng-repeat=\"(key, value) in objectives.all | groupBy: \'level\'\">\n        <ion-item class=\"item-divider item-dark\">\n        Level {{ key }}\n        </ion-item>\n        <ion-item class=\"item-icon-right\" ng-repeat=\"objective in value\">\n          <div ui-sref=\"app.objectives.detail({objectiveId: objective.id})\">\n            {{ objective.title }}\n          </div>\n          <i ng-show=\"objective.completed\" class=\"icon ion-checkmark-round balanced\"></i>\n        </ion-item>\n      </section>\n      <button class=\"button button-full button-dark\" ui-sref=\"app.objectives.edit\">\n        Add Objectives\n      </button>\n    </section>\n    <button ng-show=\"objectives.empty()\" class=\"button button-full button-assertive\" ui-sref=\"app.objectives.edit\">\n      Add Objectives\n    </button>\n</ion-view>\n");
$templateCache.put("app/tasks/views/task-item.html","<section class=\"task-item\">\n  <div class=\"item item-divider item-icon-right\"\n       ng-class=\"task.showTask ? \'item-dark\': \'item-light\'\"\n       ng-click=\"task.showTask = !task.showTask\">\n    <i ng-show=\"!task.showTask\" class=\"icon ion-ios7-plus-empty dark\"></i>\n    <i ng-show=\"task.showTask\" class=\"icon ion-ios7-minus-empty light\"></i>\n    <span ng-show=\"!task.completed\">{{task.title}}</span>\n    <del ng-show=\"task.completed\">{{task.title}}</del>\n  </div>\n  <section ng-show=\"task.showTask\">\n    <div class=\"item item-text-wrap\">\n      <p>{{task.description}}</p>\n    </div>\n    <div class=\"item item-divider\">\n      Instructions\n    </div>\n    <div ng-repeat=\"instruction in task.instructions\" class=\"item item-text-wrap\">\n      <p>{{instruction}}</p>\n    </div>\n    <div class=\"item item-divider\">\n      Resources\n    </div>\n    <a ng-repeat=\"resource in task.resources\"\n       ng-src=\"\"\n       class=\"item item-text-wrap\">\n       {{resource.site.name}} - {{resource.title}}\n    </a>\n    <div>\n      <button ng-show=\"!task.completed\" class=\"button button-block\" ng-click=\"task.toggleCompleted()\" ng-class=\"buttonColor\">\n        Complete\n      </button>\n      <button ng-show=\"task.completed\" class=\"button button-block button-dark\" ng-click=\"task.toggleCompleted()\">\n        Forgot Something\n      </button>\n    </div>\n  </section>\n</section>\n");
$templateCache.put("app/tasks/views/task-list.html","<section class=\"tasklist\">\n  <task-item task=\"task\" color=\"{{color}}\" ng-repeat=\"task in tasks\"></task-item>\n</section>\n");
$templateCache.put("app/users/views/profile.html","<ion-view title=\"Profile\">\n  <ion-content class=\"padding-horizontal\">\n    <button ng-hide=\"user.id\" id=\"sign-in\" class=\"button button-block button-assertive\" ng-click=\"vm.signIn()()\">\n      <card-section></card-section>\n      <i class=\"ion-social-github\"> </i>Sign In\n    </button>\n    <section ng-show=\"user.id\" class=\"profile list card\">\n\n      <div class=\"item item-avatar\">\n        <img ng-src=\"{{user.avatar_url}}\">\n        <h2 class=\"profile-id\">{{ user.id }}</h2>\n        <h3>{{ user.role }}</h3>\n      </div>\n\n      <div class=\"item item-body\">\n        <img class=\"full-image\" ng-src=\"{{ user.portrait_url }}\">\n      </div>\n\n      <div href=\"#\" class=\"item item-icon-left\">\n        <i class=\"icon ion-person dark\"></i>\n        {{ user.name.full}}\n      </div>\n\n      <div href=\"#\" class=\"item item-icon-left\">\n        <i class=\"icon ion-ios7-speedometer dark\"></i>\n        Level: {{ user.level }}\n      </div>\n\n      <div href=\"#\" class=\"item item-icon-left\">\n        <i class=\"icon ion-ios7-bookmarks dark\"></i>\n        {{ user.study }}\n      </div>\n\n    </section>\n      <button ng-show=\"user.isCurrentUser\" id=\"sign-out\" class=\"button button-block button-dark\" ng-click=\"user.signOut()()\">\n        <i class=\"ion-social-github\"> </i>Sign Out\n      </button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("app/users/views/users.html","<ion-view title=\"Users\">\n  <ion-content>\n    <ion-list>\n      <ion-item class=\"user item-avatar\" \n         collection-repeat=\"user in users.all\"\n         collection-item-width=\"\'100%\'\"\n         collection-item-height=\"76\"\n         ng-style=\"{height: 76}\"\n         ui-sref=\"app.profile({id: user.profile.id})\">\n        <img ng-src=\"{{user.profile.avatar_url}}\"></img>\n        <h2>{{user.profile.name.full}}</h2>\n        <p>{{user.profile.role}}</h2>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n");}]);