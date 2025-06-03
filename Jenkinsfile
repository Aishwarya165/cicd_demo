pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Aishwarya165/cicd_demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Export (Optional for Static Sites)') {
            when {
                expression { fileExists('next.config.js') }
            }
            steps {
                sh 'npm run export'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' // Optional: Add your test command
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deployment logic here (e.g., rsync, scp, Docker, etc.)
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
