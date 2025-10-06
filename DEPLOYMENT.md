# Deploying Connecta Website to AWS (connectaai.com)

Your production build is ready in the `dist` folder! Here's how to deploy it to AWS.

## Option 1: AWS S3 + CloudFront (Recommended) ⭐

This is the easiest and most cost-effective option for static websites.

### Step 1: Create S3 Bucket

1. Go to **AWS S3 Console**: https://s3.console.aws.amazon.com/
2. Click **"Create bucket"**
3. **Bucket name**: `connectaai.com` (must match your domain)
4. **Region**: Choose closest to your users (e.g., `us-east-1`)
5. **Uncheck** "Block all public access" (we need public access for website)
6. Click **"Create bucket"**

### Step 2: Upload Website Files

1. Open your bucket (`connectaai.com`)
2. Click **"Upload"**
3. Upload ALL files from the `dist` folder:
   - `index.html`
   - `assets/` folder (all CSS, JS, and images)
4. Click **"Upload"**

### Step 3: Enable Static Website Hosting

1. In your bucket, go to **"Properties"** tab
2. Scroll to **"Static website hosting"**
3. Click **"Edit"**
4. Select **"Enable"**
5. **Index document**: `index.html`
6. **Error document**: `index.html` (for SPA routing)
7. Click **"Save changes"**
8. Note the **Bucket website endpoint** URL

### Step 4: Set Bucket Policy (Make Public)

1. Go to **"Permissions"** tab
2. Scroll to **"Bucket policy"**
3. Click **"Edit"**
4. Paste this policy (replace `connectaai.com` with your bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::connectaai.com/*"
    }
  ]
}
```

5. Click **"Save changes"**

### Step 5: Create CloudFront Distribution (for HTTPS & Custom Domain)

1. Go to **CloudFront Console**: https://console.aws.amazon.com/cloudfront/
2. Click **"Create distribution"**
3. **Origin domain**: Select your S3 bucket website endpoint (NOT the bucket itself)
   - Format: `connectaai.com.s3-website-us-east-1.amazonaws.com`
4. **Viewer protocol policy**: `Redirect HTTP to HTTPS`
5. **Alternate domain names (CNAMEs)**:
   - `connectaai.com`
   - `www.connectaai.com`
6. **Custom SSL certificate**:
   - Click **"Request certificate"** (opens ACM in new tab)
   - Request certificate for `connectaai.com` and `*.connectaai.com`
   - Validate via DNS (add CNAME records to your domain)
   - Come back and select the certificate
7. **Default root object**: `index.html`
8. Click **"Create distribution"**
9. Wait 10-15 minutes for deployment
10. Note your **CloudFront domain** (e.g., `d1234abcd.cloudfront.net`)

### Step 6: Configure Domain (Route 53 or Your DNS Provider)

#### If using Route 53:
1. Go to **Route 53 Console**: https://console.aws.amazon.com/route53/
2. Click **"Hosted zones"** → Select `connectaai.com`
3. Click **"Create record"**
4. **Record name**: Leave empty (for apex domain)
5. **Record type**: `A`
6. **Alias**: Yes
7. **Route traffic to**: CloudFront distribution
8. Select your distribution
9. Click **"Create records"**
10. Repeat for `www.connectaai.com`

#### If using another DNS provider (GoDaddy, Namecheap, etc.):
1. Go to your DNS provider
2. Add these records:
   - **A record** or **CNAME**: Point `connectaai.com` to CloudFront domain
   - **CNAME**: Point `www.connectaai.com` to CloudFront domain

### Step 7: Test Your Website

1. Wait 5-10 minutes for DNS propagation
2. Visit: https://connectaai.com
3. Test language switching (EN/ES)
4. Test contact form
5. Done! 🎉

---

## Option 2: AWS Amplify (Easier, but more expensive)

### Steps:

1. Go to **AWS Amplify Console**: https://console.aws.amazon.com/amplify/
2. Click **"New app"** → **"Host web app"**
3. Choose **"Deploy without Git provider"**
4. **App name**: `Connecta`
5. Drag and drop the `dist` folder
6. Click **"Save and deploy"**
7. Wait 2-3 minutes
8. Go to **"Domain management"**
9. Click **"Add domain"**
10. Enter: `connectaai.com`
11. Follow DNS configuration instructions
12. Done! 🎉

---

## Updating Your Website

### For S3 + CloudFront:
1. Make changes to your code
2. Run: `npm run build`
3. Upload new `dist` files to S3 (replace old files)
4. Go to CloudFront → Your distribution → **"Invalidations"**
5. Click **"Create invalidation"**
6. Enter: `/*`
7. Click **"Create"**
8. Wait 2-3 minutes for cache to clear

### For Amplify:
1. Make changes to your code
2. Run: `npm run build`
3. Go to Amplify app
4. Drag and drop new `dist` folder
5. Done!

---

## Cost Estimate (Monthly)

### S3 + CloudFront:
- S3 storage: $0.50 - $2
- CloudFront: $1 - $5 (first 50GB free)
- Route 53: $0.50
- **Total**: ~$2-8/month

### Amplify:
- $0.15 per GB served
- $0.023 per build minute
- **Total**: ~$5-20/month

---

## Troubleshooting

### Website not loading:
- Check bucket policy is public
- Verify CloudFront distribution is deployed
- Check DNS records point to CloudFront

### Contact form not working:
- Web3Forms should work from any domain
- No additional configuration needed

### SSL certificate issues:
- Make sure you validated the certificate in ACM
- Certificate must be in `us-east-1` region for CloudFront

---

## Need Help?

Your website is ready to deploy! The `dist` folder contains all production files.

**Quick Start**: Use AWS Amplify for the easiest deployment (Option 2)
**Best Practice**: Use S3 + CloudFront for better performance and lower cost (Option 1)
