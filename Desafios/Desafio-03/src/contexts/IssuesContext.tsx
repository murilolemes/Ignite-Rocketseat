import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { apiGitHub } from '../lib/axios'

interface UsersProps {
  name: string
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
  followers_url: string
}

interface IssuesProps {
  title: string
  number: number
  body: string
  created_at: string
  url: string
  html_url: string
  comments: number
}

interface IssuesContentProps {
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  login: string
}

interface IssuesContextType {
  user?: UsersProps
  issues?: IssuesProps[]
  issueContent?: IssuesContentProps
  fetchIssueContent: (url: string) => void
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [user, setIsUser] = useState<UsersProps>()
  const [issues, setIsIssues] = useState<IssuesProps[]>()
  const [isIssueContent, setIsIssueContent] = useState<IssuesContentProps>()

  const fetchUser = useCallback(async () => {
    const response = await apiGitHub.get('/users/murilolemes')

    setIsUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const fetchIssues = useCallback(async () => {
    const response = await apiGitHub.get('/search/issues', {
      params: {
        q: 'repo:rocketseat-education/reactjs-github-blog-challenge',
      },
    })

    if (response.data) {
      setIsIssues(response.data.items)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  const fetchIssueContent = useCallback(async (url: string) => {
    const urlPath = url.split('https://api.github.com/')

    const responseIssue = await apiGitHub.get(`/${urlPath[1]}`)

    const userLogin = responseIssue.data.user.login

    const responseUser = await apiGitHub.get(`/users/${userLogin}`)

    setIsIssueContent({
      title: responseIssue.data.title,
      comments: responseIssue.data.comments,
      html_url: responseIssue.data.html_url,
      body: responseIssue.data.body,
      created_at: responseIssue.data.created_at,
      login: responseUser.data.login,
    })
  }, [])

  const issueContent = isIssueContent

  return (
    <IssuesContext.Provider
      value={{ user, issues, issueContent, fetchIssueContent }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
