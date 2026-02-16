const FILESTACK_API_KEY = process.env.FILESTACK_API_KEY

interface FilestackUploadResponse {
  url: string
  handle: string
  filename: string
  size: number
  mimetype: string
}

async function upload(
  file: File | Blob,
  options?: { path?: string }
): Promise<FilestackUploadResponse> {
  if (!FILESTACK_API_KEY) {
    throw new Error('FILESTACK_API_KEY is not configured')
  }

  const formData = new FormData()
  formData.append('fileUpload', file)

  const params = new URLSearchParams({ key: FILESTACK_API_KEY })
  if (options?.path) {
    params.set('path', options.path)
  }

  const response = await fetch(
    `https://www.filestackapi.com/api/store/S3?${params}`,
    { method: 'POST', body: formData }
  )

  if (!response.ok) {
    throw new Error(`Filestack upload failed: ${response.statusText}`)
  }

  return response.json()
}

export async function uploadFile(
  file: File | Blob,
  options?: { path?: string }
): Promise<FilestackUploadResponse> {
  return upload(file, options)
}

export async function uploadImage(
  file: File | Blob,
  options?: { path?: string; maxWidth?: number }
): Promise<FilestackUploadResponse> {
  const result = await upload(file, options)

  if (options?.maxWidth) {
    result.url = `https://cdn.filestackcontent.com/resize=width:${options.maxWidth}/${result.handle}`
  }

  return result
}
