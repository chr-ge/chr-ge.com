import { useEffect } from 'react'

/**
 * Log the portfolio Github repo.
 */
export const useLogMessage = (): void => {
  useEffect(() => {
    console.info(
      `%c
         _____ _    _ _____         _____ ______ 
        / ____| |  | |  __ \\       / ____|  ____|
       | |    | |__| | |__) |_____| |  __| |__   
       | |    |  __  |  _  /______| | |_ |  __|  
       | |____| |  | | | \\ \\      | |__| | |____ 
        \\_____|_|  |_|_|  \\_\\      \\_____|______|
    
        Check out my portfolio's code on Github:
        https://github.com/chr-ge/chr-ge.com
        `,
      'color:yellow;font-weight:bold'
    )
  }, [])
}
