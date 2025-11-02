pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yogesh567894/retro-pixel-profile-craft'
            }
        }

        stage('Build Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh 'docker build -t my-webapp:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying locally..."
                    sh 'docker stop my-webapp-container || true'
                    sh 'docker rm my-webapp-container || true'
                    sh 'docker run -d --name my-webapp-container -p 8081:80 my-webapp:latest'
                    echo "Deployed at http://localhost:8081"
                }
            }
        }
    }
}
