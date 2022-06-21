import { readFileSync, writeFileSync } from 'fs'

/**
 * 替换文件中的字符串
 */
export function replaceFileContent(filePath: string, oldStr: string, newStr: string) {
	const content = readFileSync(filePath, 'utf8')
	const newContent = content.replace(oldStr, newStr)
	writeFileSync(filePath, newContent)
}
