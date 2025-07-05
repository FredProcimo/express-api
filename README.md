# REST API with Cloud Run Deployment

A TypeScript Express API with automated deployment to Google Cloud Run using GitHub Actions.

## Local Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run emulator
```

## Deployment Setup

### Prerequisites

1. **Google Cloud Project**: Create a GCP project and enable the following APIs:
   - Cloud Run API
   - Container Registry API
   - Cloud Build API

2. **Service Account**: Create a service account with the following roles:
   - Cloud Run Admin
   - Storage Admin
   - Service Account User

### GitHub Repository Setup

1. **Add Secrets**: Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add `GCP_SA_KEY` with the content of your `key.json` file

2. **Update Workflow**: Edit `.github/workflows/deploy.yml` and replace:
   - `PROJECT_ID` with your actual GCP project ID
   - `restapi` with your desired service name
   - `us-central1` with your preferred region

## API Endpoints

- `GET /` - Main endpoint with API info

## Environment Variables

- `PORT` - Server port (default: 8080)

## Troubleshooting

1. **Build Failures**: Check that all dependencies are in `package.json`
2. **Deployment Issues**: Verify GCP service account permissions
3. **Runtime Errors**: Check Cloud Run logs in GCP Console 