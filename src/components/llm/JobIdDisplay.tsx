type Props = {
  jobId: string
}

export function JobIdDisplay({ jobId }: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
      <div className="flex items-center space-x-3 mb-3">
        <h3 className="text-lg font-semibold text-gray-800">
          ジョブが作成されました
        </h3>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-1">ジョブID:</p>
        <p className="text-lg font-mono text-blue-600 break-all">{jobId}</p>
      </div>
      <p className="text-sm text-gray-500 mt-3">
        このIDを使用してジョブの状態を確認できます
      </p>
    </div>
  )
}
