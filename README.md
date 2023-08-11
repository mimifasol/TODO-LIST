# TODO-LIST
Enumerating objects: 176, done.
Counting objects: 100% (176/176), done.
Delta compression using up to 10 threads
Compressing objects: 100% (162/162), done.
Writing objects: 100% (176/176), 33.82 KiB | 6.76 MiB/s, done.
Total 176 (delta 77), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (77/77), done.
remote: Updated 25 paths from d99bfd5
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-22 stack
remote: -----> Determining which buildpack to use for this app
remote:  !     No default language could be detected for this app.
remote:                         HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
remote:                         See https://devcenter.heroku.com/articles/buildpacks
remote: 
remote:  !     Push failed
remote:  !
remote:  ! ## Warning - The same version of this code has already been built: 8471e31df01abf36d7af86ef56316a6ad97b570a
remote:  !
remote:  ! We have detected that you have triggered a build from source code with version 8471e31df01abf36d7af86ef56316a6ad97b570a
remote:  ! at least twice. One common cause of this behavior is attempting to deploy code from a different branch.
remote:  !
remote:  ! If you are developing on a branch and deploying via git you must run:
remote:  !
remote:  !     git push heroku <branchname>:main
remote:  !
remote:  ! This article goes into details on the behavior:
remote:  !   https://devcenter.heroku.com/articles/duplicate-build-version
remote: 
remote: Verifying deploy...
remote: 
remote: !       Push rejected to fathomless-sierra-00502.
remote: 
To https://git.heroku.com/fathomless-sierra-00502.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to pu                sh some refs to 'ht                tps://git.heroku.co                [~/todo[~/todo-list-express-master] (✘ [~/todo-list-express-master] (✘ main) $ heroku logs --tail
2023-08-09T15:44:44.642377+00:00 app[api]: Release v1 created by user mimifaso@gmail.com
2023-08-09T15:44:44.642377+00:00 app[api]: Initial release by user mimifaso@gmail.com
2023-08-09T15:44:44.783485+00:00 app[api]: Release v2 created by user mimifaso@gmail.com
2023-08-09T15:44:44.783485+00:00 app[api]: Enable Logplex by user mimifaso@gmail.com
2023-08-09T15:46:19.632189+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=e1cf5739-6491-494c-8b84-4bf4a2c4046e fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T15:46:20.512416+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=d6ee5681-3985-4452-bfde-5842773f1290 fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T15:55:01.018631+00:00 app[api]: Release v3 created by user mimifaso@gmail.com
2023-08-09T15:55:01.018631+00:00 app[api]: Set MONGODB_URI config vars by user mimifaso@gmail.com
2023-08-09T16:41:01.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-09T16:41:02.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/2670ec3e-9cb5-490b-96b0-858d050eded8
2023-08-09T16:51:21.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-09T16:51:22.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/5c09c8c1-5c9a-48f7-86cf-1e777551dc2e
2023-08-09T16:56:40.381253+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=b75eff68-37ec-4dc1-b97f-48e8f0ea85c2 fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:01:08.185477+00:00 app[api]: Set FACEBOOK_ID config vars by user mimifaso@gmail.com
2023-08-09T17:01:08.185477+00:00 app[api]: Release v4 created by user mimifaso@gmail.com
2023-08-09T17:01:28.109727+00:00 app[api]: Set FACEBOOK_SECRET config vars by user mimifaso@gmail.com
2023-08-09T17:01:28.109727+00:00 app[api]: Release v5 created by user mimifaso@gmail.com
2023-08-09T17:12:20.544090+00:00 app[api]: Set FACEBOOK_CALLBACK config vars by user mimifaso@gmail.com
2023-08-09T17:12:20.544090+00:00 app[api]: Release v6 created by user mimifaso@gmail.com
2023-08-09T17:14:35.884031+00:00 app[api]: Set FACEBOOK_CALLBACK config vars by user mimifaso@gmail.com
2023-08-09T17:14:35.884031+00:00 app[api]: Release v7 created by user mimifaso@gmail.com
2023-08-09T17:16:15.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-09T17:16:16.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/428e303f-1a08-4b32-804e-f5f0b5fbf612
2023-08-09T17:21:12.579976+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=915d05de-87b2-4f69-9b74-6acc9000a67f fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:35:26.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-09T17:35:27.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/1505339c-9335-4e28-b2a2-05e611e1f3de
2023-08-09T17:41:47.310119+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=2636acd9-a900-49dd-a281-b46327d06da2 fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:41:47.724133+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=d253ea89-c7b5-497e-b351-180eda90ec5b fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:43:17.226721+00:00 app[api]: Release v8 created by user mimifaso@gmail.com
2023-08-09T17:43:17.226721+00:00 app[api]: Set FACEBOOK_CALLBACK config vars by user mimifaso@gmail.com
2023-08-09T17:46:05.713575+00:00 app[api]: Set FACEBOOK_CALLBACK config vars by user mimifaso@gmail.com
2023-08-09T17:46:05.713575+00:00 app[api]: Release v9 created by user mimifaso@gmail.com
2023-08-09T17:46:50.481855+00:00 app[api]: Set FACEBOOK_CALLBACK config vars by user mimifaso@gmail.com
2023-08-09T17:46:50.481855+00:00 app[api]: Release v10 created by user mimifaso@gmail.com
2023-08-09T17:49:33.081034+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/auth/facebook/callback" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=daff8307-044c-458b-aebc-07a01b433c45 fwd="173.252.83.116" dyno= connect= service= status=502 bytes= protocol=http
2023-08-09T17:49:33.165681+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/auth/facebook/callback" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=d27e3ea1-c638-4a73-a3dd-ed70d0b93cf1 fwd="173.252.83.5" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:50:10.753945+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=d65af59e-0eec-48e4-b809-c7234b59f016 fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:50:11.048742+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=1e4547ac-0acd-44ec-8164-2c98e96b7d95 fwd="122.121.228.48" dyno= connect= service= status=502 bytes= protocol=https
2023-08-09T17:51:45.814869+00:00 app[api]: Release v11 created by user mimifaso@gmail.com
2023-08-09T17:51:45.814869+00:00 app[api]: Set SESSION_SECRET config vars by user mimifaso@gmail.com
2023-08-09T17:52:22.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-09T17:52:23.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/5ffb125e-f64f-4a5f-92a0-24aebbf26682
2023-08-11T10:31:13.663760+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=366fa24a-2771-45f0-955c-e2425c4b6ea3 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:25.010105+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=7a44a017-376b-42b5-b117-c91deba2332d fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:54.817998+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=128f8660-f6f1-4b61-9a52-8bf9a83bdd2f fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:55.798933+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon-precomposed.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=3d5f6011-42d8-476b-9168-b4a447792bc3 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:56.787600+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=05efea82-01a0-4d99-b342-23be8ddb84cb fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:57.774497+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=a7d40959-ed7c-4fe7-a78a-dd8d019f53b6 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:58.724776+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon-precomposed.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=9442bafd-3e51-422e-bc0c-c492e03165c9 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:31:59.716228+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=913c8983-5af6-41cf-8115-cc3299685e99 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:00.702453+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=be50ee9d-cbb5-4f2d-bf91-af000f7f8131 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:01.668859+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=a91ad9a7-8f76-41b4-a4e8-ae3fbb714fb7 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:02.664046+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon-precomposed.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=e291994b-8380-4ea7-ab4f-7401ffb6a18e fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:03.601321+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=a2160a91-195a-475e-ba03-bccfc4268026 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:04.546297+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=7bfedb3b-95fa-4ec0-aec1-69b75e4032f2 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:05.489408+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon-precomposed.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=aa280728-0af8-4fb4-b65f-cd68c1f7adf6 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:06.372899+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/apple-touch-icon.png" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=a20f290d-da66-47ed-a4ae-b81c77de327b fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:32:07.355150+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=9dcf4478-9ae6-48b9-a1d5-688f99d69b85 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T10:36:31.041666+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=fathomless-sierra-00502-f9ec9d0cd530.herokuapp.com request_id=4e3b71e2-8334-440a-a589-699c4eb59671 fwd="211.22.240.136" dyno= connect= service= status=502 bytes= protocol=https
2023-08-11T11:08:52.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-11T11:08:53.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/6123d015-2449-4807-8c2a-96073b0f3e3a
2023-08-11T11:29:21.947222+00:00 app[api]: Set MONGODB_URI config vars by user mimifaso@gmail.com
2023-08-11T11:29:21.947222+00:00 app[api]: Release v12 created by user mimifaso@gmail.com
2023-08-11T11:31:37.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-11T11:31:38.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/b14d129a-49b6-4d64-86bf-4b3c0dfda2cc
2023-08-11T11:47:48.000000+00:00 app[api]: Build started by user mimifaso@gmail.com
2023-08-11T11:47:49.000000+00:00 app[api]: Build failed -- check your build output: https://dashboard.heroku.com/apps/974fe976-326d-462b-be2a-a71b83d5569f/activity/builds/1a7ebfba-8d1d-4d4e-ba91-3f25f8f0566c
