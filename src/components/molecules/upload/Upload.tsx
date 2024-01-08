import { Icon } from '@/components/atoms/icons/Icon'
import { DocumentProps } from '@/contexts/applicationDetails/applicationDetails.types'

type UploadPropsType = {
  doc?: DocumentProps
}

export const Upload = ({ doc }: UploadPropsType) => {
  return (
    <>
      {doc ? (
        <div>{doc.fileName}</div>
      ) : (
        <div className="flex items-center justify-center rounded-3 border-dashed border-[1px] border-gray-500 bg-gray-800 p-3">
          <Icon name="upload" className="w-13 h-13 text-gray-500" />
          <div>
            <p>CV</p>
          </div>
        </div>
      )}
    </>
  )
}
