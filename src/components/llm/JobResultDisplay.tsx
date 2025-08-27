type Props = {
  resultText: string
}

export function JobResultDisplay({ resultText }: Props) {
  return (
    <div className="p-4 border rounded">
      <p className="font-medium">結果:</p>
      <p>{resultText}</p>
    </div>
  )
}
