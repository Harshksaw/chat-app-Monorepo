ssh -i ~/.ssh/id_rsa_do root@64.227.147.124
          cd week-25-ci-next-app/ && git pull
          pnpm install
          pnpm run build
          pm2 restart fe-sever
          pm2 restart http-sever
          pm2 restart ws-sever


