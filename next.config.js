
module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  compress: true,
  env: {
    FIREBASE_PRIVATE_KEY: '---- - BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMJwCE2cif5Dy1\nRdmMDRIXuLPnv55taNZUlCE3AChXmBEcgxkXu0cfhDgK1ORZTRpFY6krwp8pK7pn\nZFiuya4nHnvdLoKCBWOYNiRgFda0lDMuUIaEJbRxPd2ULD0gEKWX26ROFc + 3Ee3r\nRYkSS8zhWFUv + NuVbiOSjmmPN / pGcQy6coQ / FwTvS4QIBlSkUkfSfjfb489kpLs7\nINo0LaB / uVxdPK0QHM9dq2MXkf3dmiPQjuLJ2ooOTmhCztEu6NQObo8NZB + 6QQtw\nXqJqk1hILOfMOK5phIQdLJFTw0jBKPeAYarGGhk53eFnjN28fPE1NBG6ZYWDxy + 6\nPkIZmxVNAgMBAAECggEALnbiA1qd8uY7evZ + 4QVIjOWY7LIMGNK3lWBxftcmV2lg\n26Bq4Z / aPC4Xoz95CWonBIv + QNt25iPxtP59wKpeXMDvaBPh2D3pwQbxmHzf9RGV\n5ICnXQRH4U43VDYNY3LmfX2cE7mbIQuPnvCgle1yoAc + vEBjmcsLhZusItCWwdko\n8SHeEeWDZCDrw / R9FRtAnG0WDxpk3fVxlhhH + 4TgzG8vO8V2T2KzC23Y3Vw6EY6 /\nYnDUBQjd18RJ59F0FBtMv0dSOMD21QWRu9H / ObjxYg6hFSOdl6lY8QMrXdvGa + Zo\nHkVb855 + KuYmEbI1skGAh78KqswefQnu1EHMAwdH8QKBgQDsabfGoVpTMWf8ewkX\nBClFLFuhCHeco6ZgkdMi / ftuujj6twvckHi8X9zakf19VfzvrWovrEyBoFgSUdY9\ndJRzXgSSMNdj4rFsIdE2murtp + /9fyNteGyr71d6yTMB5aIxKYkcjv0guk8FXZfG\nKWogxsGXjl+BFonHh/DkArwWhwKBgQDdEQqqDf0itps934DlUBt049LGH4yIj8y6\nKbe++QNecNreiyFVDKIKpesEuarkYvC8Y6v4AlqQWQ5EKKh2hjvsWZG2AyVInIOh\nNInMi58p + Uc6SJvU5bcazHuyouF8eshnqGDKMxbmE21XVsXwb3UTI45gdwLn6qiB\nSQPWa6rWiwKBgA9T11dodKu6I0zKSU + VtHtIofQx0Vd1gL74FWFKaDfImRMgNQOq\n1jkYWgBNwMqUfZ6odp76o8cvtyYQ6jv3x / wm11MHGZ / fPbOOCbtpldusrLGZwZlC\nWoFXNiu + ybDQy5A2ai5Q0vaBPchSRhnR65COclS6JVUAOhSWqraNutYXAoGBALKM\nRRS8X6td2VzL3AtZ / BMYvvAOIy9ZFX12nFW + QZ5RgDUmIjHTFj2LbJpQa1ozH0TJ\nK + gP3p2fkAo03Ht + R3 / JiAp91 + shnp7hFDsEufToxUKpylLVhmI6rd3F + GDVum8e\na65kPSZuom1cRFrBasmeeiwnc01lFdv14QeZxk2pAoGAKydNAmmaEUkWJkS8wehG\nQC9VpPa0IjFxrK6geCOaC4CZ8L10ZSv0nQBdWd6LU + StunUMNi5U3p0XB / fCCX5T\nYyvKgewaCSBbTKTxlkymYwItMVUKzOzfYOg + X2s3JUB6iTLN0NlQG98dn2L68a4z\nBn2 + taULkioo75NNDL36plY=\n----- END PRIVATE KEY-----\n',
  },
  async headers() {
    return [
      {
        source: '/api/products',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
};
