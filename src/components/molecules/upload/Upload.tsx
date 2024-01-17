import { Loader } from '@/components/atoms'
import { Icon } from '@/components/atoms/icons/Icon'
import { DocumentProps } from '@/contexts/applicationDetails/applicationDetails.types'
import { convertFileSize } from '@/utils/formating/formats'
import clsx from 'clsx'
import { ChangeEvent, useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'

export type Files = FileList | object[]

type UploadPropsType = {
  doc?: DocumentProps
  label?: string
  subtitle?: string
  accept?: string
  handleChange?: (files: FileList) => void
  isLoading?: boolean
}

export const UploadInput = ({ doc, label, subtitle, accept, handleChange, isLoading }: UploadPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleOnFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && handleChange) {
      handleChange(e.target.files)
    }
  }

  const onDrop = useCallback((acceptedFiles: object[]) => {
    if (acceptedFiles && handleChange) {
      handleChange(acceptedFiles as unknown as FileList)
    }
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <>
      {doc ? (
        <div className="rounded-3 border-[1px] border-gray-600 p-2">
          <div className="flex w-full items-center justify-center px-3 py-6 bg-gray-700 rounded-2">
            {isLoading ? <Loader /> : <img src="/assets/pdfIcon.svg" alt="pdfIcon" />}
          </div>
          <p className="w-full text-3 text-gray-100 truncate pt-2">{doc.fileName}</p>
          <p className="text-left text-2 text-gray-400">{convertFileSize(doc.size)}</p>
        </div>
      ) : (
        <div {...getRootProps()}>
          <input
            {...getInputProps()}
            className="hidden"
            type="file"
            accept={accept}
            ref={inputRef}
            onChange={handleOnFileChange}
          />
          <div
            onClick={handleClick}
            className={clsx(
              'flex flex-col items-center justify-center h-full rounded-3 border-dashed border-[1px] border-gray-500 bg-gray-800 p-3 cursor-pointer text-gray-500 transition-all',
              'hover:border-gray-300 hover:text-gray-300'
            )}
          >
            <Icon name="upload" className="w-13 h-13" />
            <div className="flex flex-col items-center">
              <p className="text-3 mt-3">{label}</p>
              <p className="text-3 mt-1">{subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
