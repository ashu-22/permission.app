@@ -0,0 +1,9 @@
+
+SFTP_PATH = "permission.app:~/permission.app/"
+URL       = "https://permission.app/"
+
+.PHOHY: deploy
+deploy:
+	rsync -avz --exclude .git . "${SFTP_PATH}"
+	@echo "Done deploying. Go to ${URL}"
+
